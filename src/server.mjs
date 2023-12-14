// ts-check
/* eslint-env node */

import assert from "assert";
import { WebSocketServer } from "ws";
import {
  createServerProcess,
  createWebSocketConnection,
  forward,
} from "vscode-ws-jsonrpc/server";
import { toSocket } from "vscode-ws-jsonrpc";

const argv = process.argv.slice(2);
const port = parseInt(argv[0]);
if (!isNaN(port)) {
  argv.shift();
}

const magic = argv[0] || process.env.MAGIC || "ls";
const wss = new WebSocketServer(
  {
    port: port || parseInt(process.env.PORT || "") || 3000,
    perMessageDeflate: false,
  },
  () => {
    const v = wss.address();
    if (typeof v == "string") {
      console.log(`Listening to WebSocket request on ${v}`);
    } else {
      const { address: host, port } = v;
      console.log(`Listening to WebSocket request on ${host}:${port}`);
    }
  },
);

wss.on("connection", (socket, request) => {
  if (!request.url) {
    console.error("Nil URL");
    socket.close();
    return;
  }

  const url = new URL(request.url, `http://${request.headers.host}`);
  const [_, ls, type] = url.pathname.split("/", 3);
  assert.deepEqual(_, "");

  if (ls != magic) {
    console.error(`URL should be starting with /${magic}/`, request.url);
    socket.close();
    return;
  }

  const command = `.${url.pathname}/run`;
  const rpcProcess = createServerProcess(type, command, [url.search]);
  if (!rpcProcess) {
    console.error("Invalid command", command);
    socket.close();
    return;
  }

  // @ts-ignore
  const rpcSocket = toSocket(socket);
  forward(createWebSocketConnection(rpcSocket), rpcProcess);

  console.log(`Forwarding new client to ${command}`);
  rpcSocket.onClose((code, reason) => {
    console.log(`Client closed: code=${code} reason=${reason}`);
    rpcProcess.dispose();
  });
});
