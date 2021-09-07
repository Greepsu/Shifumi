const SocketEvents = Object.freeze({
  CONNECTION: "connection",
  CONNECTED: "connected",
  ADD_USER: "add user",
  GET_USER: "get user",
  CREATE_ROOM: "create room",
  GET_ROOM: "get room",
  JOIN_ROOM: "join room",
  GAME_START: "game start",
  PLAYER_CHOICE: "player choice",
  DISCONNECT: "disconnect",
  DISCONNECTED: "disconnected",
});

module.exports = SocketEvents;
