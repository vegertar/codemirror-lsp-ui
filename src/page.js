// @ts-check

import { ViewPlugin } from "@codemirror/view";

import { fileEvent } from "./file";
import { stepNumber, stepTree } from "./step";

export const pageNavigator = ViewPlugin.define((view) => {
  /**
   * @this {Window}
   * @param {PopStateEvent} ev
   */
  function listener(ev) {
    if (ev.state) {
      const tree = view.state.field(stepTree);
      const node = tree.nodes.get(ev.state);

      if (node) {
        view.setState(node[0]);
      }
    }
  }

  window.addEventListener("popstate", listener);
  return {
    update(update) {
      const prevNumber = update.startState.field(stepNumber);
      const currNumber = update.state.field(stepNumber);

      for (const tr of update.transactions) {
        if (tr.annotation(fileEvent)?.type == "load") {
          history.replaceState(prevNumber, "");
          history.pushState(null, "");
          break;
        }
      }

      history.replaceState(currNumber, "");
    },
    destroy() {
      window.removeEventListener("popstate", listener);
    },
  };
});

export default function () {
  return [pageNavigator];
}
