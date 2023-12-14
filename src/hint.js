// @ts-check

import { Facet } from "@codemirror/state";
import { showTooltip } from "@codemirror/view";
import { HintSet } from "codemirror-lsp-components";
import { Hover, HoverProvider } from "codemirror-lsp";

import { documentLink } from "./link";
import { lifecycleGuard } from "./utils";

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
  // eslint-disable-next-line no-unused-vars
  constructor(view) {
    this.dom = lifecycleGuard(this);
    this.dom.classList.add("cm-lsp-hint");
  }

  connectedCallback() {
    this.hints = new HintSet({ target: this.dom });
  }

  disconnectedCallback() {
    if (this.hints) {
      this.hints.$destroy();
      this.hints = null;
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
    this.hints?.$set({
      hints: /** @type {Hints} */ (update.state.facet(hint).filter((x) => x)),
    });
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
  return showTooltip.compute([Hover.state], (state) => ({
    pos: state.field(Hover.state),
    create: (view) => new HintView(view),
  }));
}

function createDocumentLinkHint() {
  return hint.compute([Hover.state, documentLink], (state) => {
    const pos = Hover.value(state, "required by document link hint");
    const result = pos != null && state.field(documentLink).find(pos);
    return result ? ["DocumentLink", result.link] : null;
  });
}

function createHoverHint() {
  return hint.compute([Hover.state, HoverProvider.state], (state) => {
    const pos = Hover.value(state, "required by hover hint");
    const response = state.field(HoverProvider.state);
    if (response && response.pos === pos) {
      return ["Hover", response];
    }
    return null;
  });
}

export default function () {
  return [showHint(), createDocumentLinkHint(), createHoverHint()];
}
