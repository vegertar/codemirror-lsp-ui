// @ts-check

import { StateField } from "@codemirror/state";
import { ViewPlugin } from "@codemirror/view";

class Tree {
  static count = 0;

  /** @type {Map<number, [node: import("@codemirror/state").EditorState, parent: number]>} */
  nodes = new Map();

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
    /** @type {[root: {id: 1}, ...descendants: {id: number, parentId: number}[]]} */
    const data = [{ id: 1 }];
    this.nodes.forEach((value, id) => {
      const parentId = value[1];
      data.push({ id, parentId });
    });
    return data;
  }
}

const tree = new Tree();

export const stepNumber = StateField.define({
  create() {
    return ++Tree.count;
  },
  update() {
    return ++Tree.count;
  },
});

export const stepTree = StateField.define({
  create() {
    return tree;
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
      console.log(tree.strata());
    },
  };
});

export default function () {
  return [stepNumber, stepTree, stepView];
}
