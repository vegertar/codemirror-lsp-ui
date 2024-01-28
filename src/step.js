// @ts-check

import { Facet } from "@codemirror/state";
import { TextDocumentSynchronization, initializeResult } from "codemirror-lsp";

export const IDLE_STEP = /** @type {const} */ (0);
export const BUSY_STEP = /** @type {const} */ (1);

/**
 * @typedef StepState
 * @type {typeof IDLE_STEP | typeof BUSY_STEP}
 */

/** @type {import("@codemirror/state").Facet<StepState, StepState>} */
export const step = Facet.define({
  combine: (value) => {
    return value.indexOf(BUSY_STEP) === -1 ? IDLE_STEP : BUSY_STEP;
  },
});

/**
 * @overload
 * @param {import("@codemirror/state").StateField<boolean>} field
 * @returns {import("@codemirror/state").Extension}
 */

/**
 * @overload
 * @param {import("@codemirror/state").StateField<0 | 1>} field
 * @returns {import("@codemirror/state").Extension}
 */

/**
 * @template {string} T
 * @overload
 * @param {import("@codemirror/state").StateField<Record<T, StepState>>} field
 * @returns {import("@codemirror/state").Extension}
 */

/**
 * @param {import("@codemirror/state").StateField<any>} field
 * @returns {import("@codemirror/state").Extension}
 */
export function provideStep(field) {
  return step.from(field, (value) => {
    if (typeof value === "object" && value) {
      const values = Array.isArray(value) ? value : Object.values(value);
      value = values.find((x) => x);
    }
    return value ? BUSY_STEP : IDLE_STEP;
  });
}

/**
 *
 * @param {import("@codemirror/state").EditorState} state
 */
export function isStepIdle(state) {
  return state.facet(step) === IDLE_STEP;
}

export const stepHandshake = step.from(initializeResult, (complete) =>
  complete ? IDLE_STEP : BUSY_STEP,
);

export const stepDocument = step.from(
  TextDocumentSynchronization.state,
  (state) =>
    state === TextDocumentSynchronization.OPEN ||
    state === TextDocumentSynchronization.CLOSED
      ? IDLE_STEP
      : BUSY_STEP,
);

export default function () {
  return [stepHandshake, stepDocument];
}
