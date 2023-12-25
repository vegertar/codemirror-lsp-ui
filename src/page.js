// @ts-check

import { ViewPlugin } from "@codemirror/view";
import { textDocument } from "codemirror-lsp";

import { isStepIdle } from "./step.js";

/** @type {Map<import("vscode-languageserver-types").URI, import("@codemirror/state").EditorState>} */
const map = new Map();

export const pageNavigator = ViewPlugin.define((view) => {
  /**
   * @this {Window}
   * @param {PopStateEvent} ev
   */
  function listener(ev) {
    if (ev.state) {
      const state = map.get(ev.state);
      if (state) {
        view.setState(state);
      }
    }
  }

  window.addEventListener("popstate", listener);

  return {
    update(update) {
      const prevUri = update.startState.field(textDocument).uri;
      const currUri = update.state.field(textDocument).uri;

      if (isStepIdle(update.state)) {
        map.set(currUri, update.state);
      }

      if (prevUri !== currUri) {
        history.pushState(prevUri, "");
        history.replaceState(currUri, "");
      }
    },
    destroy() {
      window.removeEventListener("popstate", listener);
    },
  };
});

export default function () {
  return [pageNavigator];
}
