// @ts-check

import { Facet, StateField, StateEffect } from "@codemirror/state";
import { Decoration, EditorView, ViewPlugin } from "@codemirror/view";
import {
  DocumentLinkProvider,
  DocumentLinkResolver,
  getFacetIfNeedsRefresh,
  getLastValueFromTransaction,
  getStateIfNeedsRefresh,
  textDocumentUriEffect,
  lspRangeToCm,
} from "codemirror-lsp";
import { produce } from "immer";

import { binarySearch, compareRange } from "./utils.js";
import { provideStep } from "./step.js";
import { createHint } from "./hint.js";

/**
 * @typedef LinkType
 * @type {"document" | "symbol"}
 */

/**
 * @typedef LinkEffect
 * @type {{
 *   type: "follow",
 *   data: import("vscode-languageserver-types").URI,
 * } | {
 *   type: "followed",
 *   data: import("vscode-languageserver-types").URI,
 * }}
 */

/** @type {import("@codemirror/state").StateEffectType<LinkEffect>} */
export const linkEffect = StateEffect.define();

/** @type {import("@codemirror/state").StateEffectType<LinkType>} */
export const linkActivateEffect = StateEffect.define();

/** @type {import("@codemirror/state").StateEffectType<LinkType>} */
export const linkDeactivateEffect = StateEffect.define();

export const linkActivity = StateField.define({
  /** @returns {Partial<Record<LinkType, 0|1>>} */
  create() {
    return {};
  },
  update(value, tr) {
    return produce(value, (draft) => {
      for (const effect of tr.effects) {
        if (effect.is(linkActivateEffect)) {
          draft[effect.value] = 1;
        } else if (effect.is(linkDeactivateEffect)) {
          draft[effect.value] = 0;
        }
      }
    });
  },
  provide: provideStep,
});

export class LinkLoading {
  static uri = StateField.define({
    create() {
      return "";
    },
    update(value, tr) {
      const ev = getLastValueFromTransaction(tr, linkEffect);
      switch (ev?.type) {
        case "follow":
          return ev.data || value;
        case "followed":
          return ev.data === value ? "" : value;
        default:
          return value;
      }
    },
  });

  static records = StateField.define({
    /**
     *
     * @returns {Record<import("vscode-languageserver-types").URI, 0|1>}
     */
    create() {
      return {};
    },
    update(value, tr) {
      return produce(value, (draft) => {
        const ev = getLastValueFromTransaction(tr, linkEffect);
        switch (ev?.type) {
          case "follow":
            draft[ev.data] = 1;
            break;
          case "followed":
            draft[ev.data] = 0;
            break;
        }
      });
    },
    provide: provideStep,
  });

  /** @type {import("@codemirror/view").PluginSpec<LinkLoading>} */
  static spec = {
    provide: () => [LinkLoading.uri, LinkLoading.records],
  };

  /**
   *
   * @param {string} uri
   */
  async openFile(uri) {
    let url = new URL(uri);
    if (url.protocol === "file:") {
      url = new URL(url.pathname, location.toString());
    }

    const response = await fetch(url);
    return await response.text();
  }

  /**
   * Implementation of the ViewPlugin update.
   * @param {import("@codemirror/view").ViewUpdate} update
   * @returns {void}
   */
  update(update) {
    const uri = getStateIfNeedsRefresh(update, LinkLoading.uri);
    if (uri) {
      this.openFile(uri).then((text) => {
        update.view.dispatch({
          effects: [
            textDocumentUriEffect.of(uri),
            linkEffect.of({ type: "followed", data: uri }),
          ],
          changes: {
            from: 0,
            to: update.state.doc.length,
            insert: text,
          },
        });
      });
    }
  }
}

export const linkLoading = ViewPlugin.fromClass(LinkLoading, LinkLoading.spec);

export const linkTheme = EditorView.baseTheme({
  ".cm-lsp-link-document": {
    textDecoration: "underline 1px",
  },
  '[data-cm-lsp-link-document="on"] .cm-lsp-link-document:hover': {
    cursor: "var(--active-cursor, pointer)",
  },
});

/**
 * @template {{decorations: import("@codemirror/view").DecorationSet}} T
 * @param {import("@codemirror/state").StateField<T>} field
 */
function createLinkDecorations(field) {
  return EditorView.decorations.from(
    field,
    (state) => state?.decorations || Decoration.none,
  );
}

/**
 * @template {{findUri: (pos: number) => import("vscode-languageserver-types").URI | undefined}} T
 * @param {import("@codemirror/state").StateField<T>} field
 * @param {LinkType} type
 * @param {string} [key="Control"]
 */
function createLinkEventHandler(field, type, key = "Control") {
  return EditorView.domEventHandlers({
    keydown(ev, view) {
      if (ev.key === key) {
        view.dispatch({
          effects: linkActivateEffect.of(type),
        });
      }
    },
    keyup(ev, view) {
      if (ev.key === key) {
        view.dispatch({
          effects: linkDeactivateEffect.of(type),
        });
      }
    },
    click({ clientX: x, clientY: y }, view) {
      if (!view.state.field(linkActivity)[type]) {
        return;
      }

      /**
       * Currently, only one file can be loaded at a time.
       */
      if (view.state.field(LinkLoading.uri)) {
        return;
      }

      const pos = view.posAtCoords({ x, y });
      if (!pos) {
        return;
      }

      const uri = view.state.field(field)?.findUri(pos);
      if (uri) {
        view.dispatch({
          effects: linkEffect.of({ type: "follow", data: uri }),
        });
        return true;
      }
    },
  });
}

/**
 *
 * @param {LinkType} type
 * @param {number} i
 * @returns
 */
function createLinkMark(type, i) {
  const activeCursor = `--cm-lsp-link-${type}-active-cursor-${i}`;
  const defaultActiveCursor = `var(--cm-lsp-link-${type}-active-cursor)`;
  const style = `--active-cursor: var(${activeCursor}, ${defaultActiveCursor});`;
  return Decoration.mark({
    class: `cm-lsp-link-${type}`,
    attributes: { style },
    type,
    i,
  });
}

/**
 * @template {{indicesOfUri: (uri: import("vscode-languageserver-types").URI) => number[]}} T
 * @param {LinkType} type
 * @param {import("@codemirror/state").StateField<T>} field
 */
function createLinkAttributes(field, type) {
  return EditorView.contentAttributes.compute(
    [linkActivity, LinkLoading.uri, field],
    (state) => {
      if (!state.field(linkActivity)[type]) {
        return {};
      }

      const key = `cm-lsp-link-${type}`;
      const attrs = { [`data-${key}`]: "on" };
      const uri = state.field(LinkLoading.uri);
      if (uri) {
        /**
         * Set the CSS cursor shape based on the link state:
         *  'wait' for self-owned links being loaded,
         *  'not-allowed' for others.
         */
        const indices = state.field(field).indicesOfUri(uri);
        const style = indices.map((i) => `--${key}-active-cursor-${i}: wait`);
        attrs.style = `--${key}-active-cursor: not-allowed;` + style.join(";");
      }

      return attrs;
    },
  );
}

/**
 * @typedef {import("vscode-languageserver-protocol").DocumentLink} DocumentLink
 */

/**
 * @typedef DocumentLinkState
 * @type {{
 *   decorations: import("@codemirror/view").DecorationSet,
 *   links: readonly DocumentLink[],
 *   find: (pos: number, side?: -1 | 1) => {datum: DocumentLink | null, from: number, to: number, pos: number},
 *   findUri: (pos: number) => import("vscode-languageserver-types").URI | undefined,
 *   indicesOfUri: (uri: import("vscode-languageserver-types").URI) => number[],
 * }}
 */

/**
 *
 * @param {readonly DocumentLink[]} links
 * @param {import("@codemirror/state").Text} doc
 * @returns {DocumentLinkState}
 */
function createDocumentLinkState(links, doc) {
  const decorations = Decoration.set(
    links.map((link, i) =>
      createLinkMark("document", i).range(...lspRangeToCm(link.range, doc)),
    ),
  );

  return {
    links,
    decorations,
    find(pos) {
      let start = NaN,
        end = NaN,
        i = -1;

      this.decorations.between(pos, pos, (from, to, { spec }) => {
        if (spec.type === "document") {
          start = from;
          end = to;
          i = spec.i;
          return false;
        }
      });

      return {
        datum: i === -1 ? null : this.links[i],
        from: start,
        to: end,
        pos,
      };
    },
    findUri(pos) {
      return this.find(pos).datum?.target;
    },
    indicesOfUri(uri) {
      /** @type {number[]} */
      const indices = [];
      this.links.forEach((link, i) => {
        if (link.target === uri) {
          indices.push(i);
        }
      });
      return indices;
    },
  };
}

/**
 * @template {{range: import("vscode-languageserver-types").Range}} T
 * @param {T} param0
 * @param {T} param1
 * @returns {number}
 */
function compareLinkRange({ range: a }, { range: b }) {
  return compareRange(a, b);
}

/** @type {import("@codemirror/state").Facet<DocumentLink>} */
const documentLinkFacet = Facet.define({
  compareInput(a, b) {
    return a.target === b.target && compareLinkRange(a, b) === 0;
  },
});

function createDocumentLinkCollection() {
  return documentLinkFacet.computeN(
    [DocumentLinkProvider.state, DocumentLinkResolver.state],
    (state) => {
      /** @type {DocumentLink[] | null} */
      const links = state.field(DocumentLinkProvider.state);
      if (!links) {
        return [];
      }

      const result = [...links];
      result.sort(compareLinkRange);

      for (const resolved of state.field(DocumentLinkResolver.state)) {
        const i = binarySearch(result, resolved, compareLinkRange);
        const provided = result[i];
        if (!provided || compareLinkRange(resolved, provided) !== 0) {
          const { start, end } = resolved.range;
          throw new Error(
            `The resolved link is unknown: .range(${start.line}:${start.character}, ${end.line}:${end.character} .target(${resolved.target})`,
          );
        }
        result[i] = resolved;
      }

      return result;
    },
  );
}

export const documentLink = StateField.define({
  /** @returns {DocumentLinkState} */
  create(state) {
    return createDocumentLinkState([], state.doc);
  },
  update(value, tr) {
    const newLinks = getFacetIfNeedsRefresh(tr, documentLinkFacet);
    if (newLinks) {
      value = createDocumentLinkState(newLinks, tr.newDoc);
    } else if (tr.docChanged) {
      value = { ...value, decorations: value.decorations.map(tr.changes) };
    }

    return value;
  },
  provide(field) {
    return [
      createDocumentLinkCollection(),
      createLinkDecorations(field),
      createLinkEventHandler(field, "document"),
      createLinkAttributes(field, "document"),
    ];
  },
});

export default function () {
  return [
    linkActivity,
    linkLoading,
    linkTheme,
    documentLink,
    createHint("DocumentLink", documentLink, (state, pos) => state.find(pos)),
  ];
}
