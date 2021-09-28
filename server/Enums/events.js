const SocketEvents = Object.freeze({
  CONNECTION: "connection",
  CONNECTED: "connected",
  ADD_USER: "add user",
  GET_USER: "get user",
  CREATE_ROOM: "create room",
  GET_ROOM: "get room",
  UPDATE_ROOM: "update room",
  SET_OPPONENT: "set opponent",
  JOIN_ROOM: "join room",
  SET_READY: "set ready",
  SET_LOCKED: "set locked",
  RESET_BUTTON: "reset button",
  GAME_START: "game start",
  PLAYER_CHOICE: "player choice",
  DISCONNECT: "disconnect",
  DISCONNECTED: "disconnected",
});

module.exports = SocketEvents;
