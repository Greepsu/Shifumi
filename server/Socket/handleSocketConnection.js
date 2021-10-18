import { SocketEvents } from "../Enums/events.js";
import { onAddUser } from "./onAddUser.js";
import { onDisconnect } from "./onDisconnect.js";
import { onJoinRoom } from "./onJoinRoom.js";
import { onConnected } from "./onConnected.js";
import { onSetReady } from "./onSetReady.js";
import { onSetLocked } from "./onSetLocked.js";
import { onClearGame } from "./onClearGame.js";

export function handleSocketConnection(socket, io) {
  function onSocket(event, callback) {
    socket.on(event, (data) => callback(data, socket, io));
  }

  onSocket(SocketEvents.CONNECTED, onConnected);
  onSocket(SocketEvents.ADD_USER, onAddUser);
  onSocket(SocketEvents.JOIN_ROOM, onJoinRoom);
  onSocket(SocketEvents.SET_READY, onSetReady);
  onSocket(SocketEvents.SET_LOCKED, onSetLocked);
  onSocket(SocketEvents.CLEAR_GAME, onClearGame);
  onSocket(SocketEvents.DISCONNECT, onDisconnect);
}
