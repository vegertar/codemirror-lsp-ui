// @ts-check

import { StateField, Facet } from "@codemirror/state";
import { ViewPlugin } from "@codemirror/view";
import { initializeResult } from "codemirror-lsp";

/** @type {import("@codemirror/state").Facet<(0|1)[], 0|1>} */
const step = Facet.define({
  combine: (value) => {
    let v = 0;
    for (const x of value) {
      for (const y of x) {
        v += y;
      }
    }
    return v ? 1 : 0;
  },
});

export const stepSession = step.from(initializeResult, (complete) =>
  complete ? [0] : [1],
);

/**
 * @template {string} T
 * @param {import("@codemirror/state").StateField<Record<T, 0|1>>} field
 * @returns
 */
export function provideStep(field) {
  return step.from(field, (value) => Object.values(value));
}

class Tree {
  static singleton = new Tree();

  /** @type {Map<number, [state: import("@codemirror/state").EditorState, parent: number]>} */
  nodes = new Map();
  count = 0;

  /**
   *
   * @param {import("@codemirror/state").EditorState} currState
   * @param {number} currNumber
   * @param {number} prevNumber
   */
  insert(currState, currNumber, prevNumber) {
    if (!this.nodes.has(currNumber)) {
      this.nodes.set(currNumber, [currState, prevNumber]);
    }

    return this;
  }

  strata() {
    /** @type {[root: {id: 1, step: 1}, ...descendants: {id: number, parentId: number, step: 0|1}[]]} */
    const data = [{ id: 1, step: 1 }];
    this.nodes.forEach(([state, parentId], id) => {
      data.push({ id, parentId, step: state.facet(step) });
    });
    return data;
  }
}

export const stepNumber = StateField.define({
  create() {
    return ++Tree.singleton.count;
  },
  update() {
    return ++Tree.singleton.count;
  },
});

export const stepTree = StateField.define({
  create() {
    return Tree.singleton;
  },
  update(value, tr) {
    const prevNumber = tr.startState.field(stepNumber);
    const currNumber = tr.state.field(stepNumber);
    return value.insert(tr.state, currNumber, prevNumber);
  },
});

export const stepView = ViewPlugin.define(() => {
  return {
    update() {
      console.log(Tree.singleton.strata());
    },
  };
});

export default function () {
  return [stepSession, stepNumber, stepTree, stepView];
}
