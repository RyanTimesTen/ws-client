const readyState = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];

let websocket;

document.querySelector("#open").addEventListener("click", () => {
  websocket = new WebSocket("wss://someserver", "graphql-transport-ws");

  console.log(`WS state: ${readyState[websocket.readyState]}`);

  websocket.onopen = () =>
    console.log(`WS state: ${readyState[websocket.readyState]}`);

  websocket.onclose = () =>
    console.log(`WS state: ${readyState[websocket.readyState]}`);
});

document
  .querySelector("#close")
  .addEventListener("click", () => websocket?.close());

document.querySelector("#status").addEventListener("click", () => {
  if (!websocket) {
    console.log("WS initialized");
    return;
  }
  console.log(`WS state: ${readyState[websocket.readyState]}`);
});
