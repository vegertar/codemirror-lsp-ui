// @ts-check

import { Facet } from "@codemirror/state";
import { TextDocumentSynchronization, initializeResult } from "codemirror-lsp";

export const IDLE_STEP = /** @type {const} */ (0);
export const BUSY_STEP = /** @type {const} */ (1);

/**
 * @typedef StepState
 * @type {typeof IDLE_STEP | typeof BUSY_STEP}
 */

/** @type {import("@codemirror/state").Facet<StepState[], StepState>} */
export const step = Facet.define({
  combine: (value) => {
    let v = 0;
    for (const x of value) {
      for (const y of x) {
        v += y;
      }
    }
    return v ? BUSY_STEP : IDLE_STEP;
  },
});

/**
 * @template {string} T
 * @param {import("@codemirror/state").StateField<Record<T, StepState>>} field
 * @returns
 */
export function provideStep(field) {
  return step.from(field, (value) => Object.values(value));
}

/**
 *
 * @param {import("@codemirror/state").EditorState} state
 */
export function isStepIdle(state) {
  return state.facet(step) === IDLE_STEP;
}

export const stepSession = step.from(initializeResult, (complete) =>
  complete ? [IDLE_STEP] : [BUSY_STEP],
);

export const stepDocument = step.from(
  TextDocumentSynchronization.state,
  (state) =>
    state === TextDocumentSynchronization.OPEN ||
    state === TextDocumentSynchronization.CLOSED
      ? [IDLE_STEP]
      : [BUSY_STEP],
);

export default function () {
  return [stepSession, stepDocument];
}
