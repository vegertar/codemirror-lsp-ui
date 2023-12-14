// @ts-check

/**
 * @typedef LifecycleCallbacks
 * @type {{
 *  connectedCallback?: () => void;
 *  disconnectedCallback?: () => void;
 * }}
 */

class LifecycleGuardElement extends HTMLElement {
  /** @type {LifecycleCallbacks | undefined} */
  lifeCycleCallbacks;

  connectedCallback() {
    this.lifeCycleCallbacks?.connectedCallback?.();
  }

  disconnectedCallback() {
    this.lifeCycleCallbacks?.disconnectedCallback?.();
  }
}

window.customElements.define("lifecycle-guard", LifecycleGuardElement);

/**
 *
 * @param {LifecycleCallbacks} lifecycleCallbacks
 */
export function lifecycleGuard(lifecycleCallbacks) {
  const element = /** @type {LifecycleGuardElement} */ (
    document.createElement("lifecycle-guard")
  );
  element.lifeCycleCallbacks = lifecycleCallbacks;
  return element;
}

/**
 * Convert the diagnostic severity from LSP to CodeMirror.
 * @param {import("vscode-languageserver-types").DiagnosticSeverity | undefined} severity
 * @returns {import("@codemirror/lint").Diagnostic['severity']}
 */
export function lspSeverityToCm(severity) {
  switch (severity) {
    case 1:
      return "error";
    case 2:
      return "warning";
    case 3:
      return "info";
    default:
      return "hint";
  }
}

/**
 * Convert given text position from LSP to the CodeMirror Position.
 * @param {import("vscode-languageserver-types").Position} pos
 * @param {import("@codemirror/state").Text} text
 * @returns {number}
 */
export function lspPositionToCm(pos, text) {
  const line = text.line(pos.line + 1);
  return line.from + pos.character;
}

/**
 * Convert given text position from LSP to the CodeMirror Position.
 * @param {import("vscode-languageserver-types").Range} range
 * @param {import("@codemirror/state").Text} text
 * @returns {[number, number]}
 */
export function lspRangeToCm(range, text) {
  return [lspPositionToCm(range.start, text), lspPositionToCm(range.end, text)];
}

/**
 *
 * @param {import("vscode-languageserver-types").Position} a
 * @param {import("vscode-languageserver-types").Position} b
 * @returns {number}
 */
export function comparePosition(a, b) {
  const d = a.line - b.line;
  return d === 0 ? a.character - b.character : d;
}

/**
 *
 * @param {import("vscode-languageserver-types").Range} a
 * @param {import("vscode-languageserver-types").Range} b
 * @returns {number}
 */
export function compareRange(a, b) {
  const d = comparePosition(a.start, b.start);
  return d === 0 ? comparePosition(a.end, b.end) : d;
}

/**
 *
 * @template T
 * @param {T[]} array
 * @param {T} item
 * @param {(item: T, mid: T) => number} f
 * @param {number} [first]
 * @param {number} [last]
 */
export function binarySearch(array, item, f, first, last) {
  let start = first || 0;
  let end = last || array.length;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    const d = f(item, array[start + mid]);
    if (d === 0) {
      return mid;
    }

    if (d < 0) {
      end = mid;
    } else {
      start = mid;
    }
  }

  return start;
}
