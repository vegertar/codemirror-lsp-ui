// @ts-check

import { Facet, StateField } from "@codemirror/state";
import { showTooltip, EditorView } from "@codemirror/view";
import { HintSet } from "codemirror-lsp-components";
import {
  Hover,
  HoverProvider,
  getFacetIfNeedsRefresh,
  getStatePairs,
} from "codemirror-lsp";

import { lifecycleGuard } from "./utils.js";

/**
 * @typedef Hints
 * @type {NonNullable<import("codemirror-lsp-components/dist/HintSet.svelte").HintSetProps['hints']>}
 */

/**
 * @typedef HintState
 * @type {{datum: Hints[0][1] | null, from: number, to: number, pos: number}}
 */

/**
 * Facet to which an extension can add a value to display a tooltip at the mouse hover position.
 * @type {Facet<[Hints[0][0], HintState] | null>}
 */
export const hint = Facet.define();

export class HintView {
  /**
   * The standalone create would update the active tooltip instead of creating a new one.
   * See: https://discuss.codemirror.net/t/change-position-of-tooltip/5783/2
   * @param {import("@codemirror/view").EditorView} view
   * @returns
   */
  static create(view) {
    return new HintView(view);
  }

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
    this.render(this.view.state);
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
    this.render(update.state);
  }

  /**
   *
   * @param {import("@codemirror/state").EditorState} state
   * @returns
   */
  render(state) {
    if (!this.hintSet) {
      return;
    }

    const pos = state.field(Hover.state, false);
    const hints = [];
    for (const item of state.facet(hint)) {
      if (!item?.[1].datum) {
        continue;
      }

      if (item[1].pos !== pos) {
        // Don't update if the position is inconsistent.
        return;
      }

      hints.push([item[0], item[1].datum]);
    }

    this.hintSet.$set({ hints: /** @type {Hints} */ (hints) });
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

export const tooltip = StateField.define({
  /** @returns {Omit<import("@codemirror/view").Tooltip, "end"> & {end: number} | null} */
  create() {
    return null;
  },

  update(value, tr) {
    const pos = tr.state.field(Hover.state, false);
    if (pos == null) {
      return null;
    }

    if (value) {
      if (tr.docChanged) {
        value = {
          ...value,
          pos: tr.changes.mapPos(value.pos, 1),
          end: tr.changes.mapPos(value.end, -1),
        };
      }
      if (value.pos <= pos && pos <= value.end) {
        return value;
      }
    }

    const hints = getFacetIfNeedsRefresh(tr, hint);
    if (hints === undefined) {
      return value;
    }

    let from = Infinity;
    let to = -Infinity;

    for (const item of hints) {
      if (!item) {
        throw new Error("Inconsistent state");
      }

      if (item[1].pos !== pos) {
        // The provider is pending on the network.
        return value;
      }

      if (!item[1].datum) {
        // The provider doesn't function at the target position.
        continue;
      }

      from = Math.min(item[1].from, from);
      to = Math.max(item[1].to, to);
    }

    // A new tooltip indicating that the content is complete.
    return { pos: from, end: to, create: HintView.create };
  },

  provide(f) {
    return showTooltip.from(f, (value) => {
      return value && value.pos <= value.end ? value : null;
    });
  },
});

export const indicator = StateField.define({
  create() {
    return false;
  },

  update(value, tr) {
    const pos = tr.state.field(Hover.state, false);
    if (pos == null) {
      return false;
    }

    const [prev, curr] = getStatePairs(tr, tooltip);
    if (prev !== curr) {
      return false;
    }

    return curr && curr.pos <= pos && pos <= curr.end ? value : true;
  },

  provide(field) {
    return EditorView.contentAttributes.from(field, (value) => {
      return { ["data-cm-lsp-hint-indicator"]: value ? "on" : "off" };
    });
  },
});

export const baseTheme = EditorView.baseTheme({
  '[data-cm-lsp-hint-indicator="on"]': {
    cursor: "progress",
  },
});

/**
 * @overload
 * @param {Hints[0][0]} type
 * @param {import("@codemirror/state").StateField<HintState>} field
 * @returns {import("@codemirror/state").Extension}
 */

/**
 * @template T
 * @overload
 * @param {Hints[0][0]} type
 * @param {import("@codemirror/state").StateField<T>} field
 * @param {(value: T, pos: number) => HintState} getter
 * @returns {import("@codemirror/state").Extension}
 */

/**
 *
 * @param {any[]} args
 * @returns {import("@codemirror/state").Extension}
 */
export function createHint(...args) {
  const [type, field, getter] = args;
  return hint.compute([Hover.state, field], (state) => {
    const pos = state.field(Hover.state, false);
    if (pos === undefined) {
      console.warn(`"Hover.state" is missing, required by ${type} hint`);
    }

    if (pos == null) {
      return null;
    }

    const response = state.field(field);
    return [type, getter ? getter(response, pos) : response];
  });
}

export default function () {
  return [
    tooltip,
    indicator,
    baseTheme,
    createHint("Hover", HoverProvider.state),
  ];
}
