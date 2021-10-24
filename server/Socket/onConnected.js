import { SocketEvents } from "../Enums/events.js";

export function onConnected(data, socket, io) {
  console.log(data);
}
