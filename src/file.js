// @ts-check

import { Annotation } from "@codemirror/state";
import { ViewPlugin } from "@codemirror/view";
import { textDocumentUriEffect } from "codemirror-lsp";

import { linkEvent } from "./link";

/**
 * @typedef FileEvent
 * @type {{
 *   type: "load",
 *   data: import("vscode-languageserver-types").URI,
 * }}
 */

/** @type {import("@codemirror/state").AnnotationType<FileEvent>} */
export const fileEvent = Annotation.define();

/**
 *
 * @param {string} uri
 */
async function openFile(uri) {
  let url = new URL(uri);
  if (url.protocol === "file:") {
    url = new URL(url.pathname, location.toString());
  }

  const response = await fetch(url);
  return await response.text();
}

export const fileLoader = ViewPlugin.define(() => {
  return {
    update(update) {
      update.transactions.forEach((tr) => {
        const ev = tr.annotation(linkEvent);
        const uri = ev?.type == "follow" && ev.data.link.target;
        if (uri) {
          openFile(uri).then((text) => {
            update.view.dispatch({
              annotations: fileEvent.of({ type: "load", data: uri }),
              effects: textDocumentUriEffect.of(uri),
              changes: {
                from: 0,
                to: update.state.doc.length,
                insert: text,
              },
            });
          });
        }
      });
    },
  };
});

export default function () {
  return [fileLoader];
}
