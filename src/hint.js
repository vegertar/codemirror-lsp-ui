// @ts-check

import { Facet } from "@codemirror/state";
import { showTooltip, repositionTooltips } from "@codemirror/view";
import { HintSet } from "codemirror-lsp-components";
import { Hover, HoverProvider, getFacetPairs } from "codemirror-lsp";

import { documentLink } from "./link.js";
import { lifecycleGuard, lspRangeToCm } from "./utils.js";

/**
 * @typedef Hints
 * @type {NonNullable<import("codemirror-lsp-components/dist/HintSet.svelte").HintSetProps['hints']>}
 */

/**
 * Facet to which an extension can add a value to display a tooltip at the mouse hover position.
 * @type {Facet<Hints[0] | null>}
 */
export const hint = Facet.define();

export class HintView {
  /**
   *
   * @param {import("@codemirror/view").EditorView} view
   */
  constructor(view) {
    this.view = view;
    this.dom = lifecycleGuard(this);
    this.dom.classList.add("cm-lsp-hint");
  }

  connectedCallback() {
    this.hintSet = new HintSet({ target: this.dom });
  }

  disconnectedCallback() {
    if (this.hintSet) {
      this.hintSet.$destroy();
      this.hintSet = null;
    }
  }

  /**
   * Implementation of TooltipView
   * @type {HTMLElement}
   */
  dom;

  /**
   * Implementation of TooltipView
   * @type {{x: number, y: number} | undefined}
   */
  offset;

  /**
   * Implementation of TooltipView
   * @type {((pos: number) => import("@codemirror/view").Rect) | undefined}
   */
  getCoords;

  /**
   * Implementation of TooltipView
   * @type {boolean | undefined}
   */
  overlap;

  /**
   * Implementation of TooltipView
   * @param {import("@codemirror/view").ViewUpdate} update
   */
  update(update) {
    const pos = Hover.value(update.state, "required by HintView");
    if (pos == null) {
      return;
    }

    const [prevHints, currHints] = getFacetPairs(update, hint);
    if (prevHints === currHints) {
      return;
    }

    /** @type {Hints} */
    const hints = [];

    let x = pos;
    for (const datum of currHints) {
      if (datum) {
        hints.push(datum);
        const response = datum[1];
        const range = response.range;
        if (range) {
          const [from] = lspRangeToCm(range, update.state.doc);
          if (from < x) {
            x = from;
          }
        }
      }
    }

    if (x === pos) {
      this.offset = undefined;
    } else {
      this.offset = { x: (x - pos) * this.view.defaultCharacterWidth, y: 0 };
    }

    this.hintSet?.$set({ hints });
    repositionTooltips(this.view);
  }

  /**
   * Implementation of TooltipView
   * @type {((space: import("@codemirror/view").Rect) => void) | undefined}
   */
  positioned;

  /**
   * Implementation of TooltipView
   * @type {boolean | undefined}
   */
  resize;
}

function showHint() {
  /**
   * The standalone create would update the active tooltip instead of creating a new one.
   * See: https://discuss.codemirror.net/t/change-position-of-tooltip/5783/2
   * @param {import("@codemirror/view").EditorView} view
   * @returns
   */
  function create(view) {
    return new HintView(view);
  }

  return showTooltip.compute([Hover.state], (state) => {
    const pos = state.field(Hover.state);
    return { pos, create };
  });
}

function createDocumentLinkHint() {
  return hint.compute([Hover.state, documentLink], (state) => {
    const pos = Hover.value(state, "required by document link hint");
    const result = pos != null && state.field(documentLink).find(pos);
    return result ? ["DocumentLink", result.link] : null;
  });
}

/**
 *
 * @param {number} pos
 * @param {{pos: number, range?: import("vscode-languageserver-types").Range}} response
 * @param {import("@codemirror/state").EditorState} state
 */
function posInResponse(pos, response, state) {
  if (pos === response.pos) {
    return true;
  }

  if (!response.range) {
    return false;
  }

  const [from, to] = lspRangeToCm(response.range, state.doc);
  return from <= pos && pos <= to;
}

/**
 *
 * @param {Hints[0][0]} type
 * @param {import("@codemirror/state").StateField<any>} field
 * @returns
 */
function createHoverHint(type, field) {
  return hint.compute([Hover.state, field], (state) => {
    const pos = Hover.value(state, `required by ${type} hint`);
    const response = pos != null && state.field(field);
    return response && posInResponse(pos, response, state)
      ? [type, response]
      : null;
  });
}

export default function () {
  return [
    showHint(),
    createDocumentLinkHint(),
    createHoverHint("Hover", HoverProvider.state),
  ];
}
