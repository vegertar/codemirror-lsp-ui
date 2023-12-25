// @ts-check

import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { cpp } from "@codemirror/lang-cpp";
import {
  serverUri,
  client,
  initializeParams,
  trace,
  publishDiagnosticsClientCapabilities,
  textDocumentSyncClientCapabilities,
  textDocument,
  documentLinkClientCapabilities,
  documentSymbolClientCapabilities,
  hoverClientCapabilities,
  declarationClientCapabilities,
  definitionClientCapabilities,
  typeDefinitionClientCapabilities,
  implementationClientCapabilities,
} from "codemirror-lsp";

import lint from "./lint.js";
import link from "./link.js";
import step from "./step.js";
import page from "./page.js";
import hint from "./hint.js";

new EditorView({
  doc: String.raw`#include <stdio.h>
#include <stdlib.h>

int main() {
  printf("Hello World\n");
  exit(0);
}`,
  extensions: [
    basicSetup,
    EditorState.readOnly.of(true),
    cpp(),

    // UI based on LSP
    lint(),
    link(),
    step(),
    page(),
    hint(),

    // LSP implementations
    client(),
    trace("verbose"),
    publishDiagnosticsClientCapabilities(),
    textDocumentSyncClientCapabilities(),
    documentLinkClientCapabilities(),
    documentSymbolClientCapabilities(),
    hoverClientCapabilities(),
    declarationClientCapabilities(),
    definitionClientCapabilities(),
    typeDefinitionClientCapabilities(),
    implementationClientCapabilities(),

    // LSP configurations
    initializeParams.of({
      rootUri: "file:///home/whom/codemirror-lsp/ls/example/c",
      capabilities: {
        textDocument: {
          hover: {
            contentFormat: ["markdown", "plaintext"],
          },
        },
      },
    }),
    serverUri.of(`ws://${location.host}/ls/example/c`),
    textDocument.init(() => ({
      uri: "file:///home/whom/codemirror-lsp/ls/example/c/hello-world.c",
      languageId: "c",
      version: 1,
    })),
  ],
  parent: document.body,
});
