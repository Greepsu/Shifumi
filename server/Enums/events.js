const SocketEvents = Object.freeze({
  CONNECTION: "connection",
  CONNECTED: "connected",
  ADD_USER: "add_user",
  GET_USER: "get_user",
  CREATE_ROOM: "create_room",
  GET_ROOM: "get_room",
  UPDATE_ROOM: "update_room",
  SET_OPPONENT: "set_opponent",
  JOIN_ROOM: "join_room",
  SET_READY: "set_ready",
  SET_LOCKED: "set_locked",
  RESET_BUTTON: "reset_button",
  GAME_START: "game_start",
  PLAYER_CHOICE: "player_choice",
  DISCONNECT: "disconnect",
  DISCONNECTED: "disconnected",
});

module.exports = SocketEvents;
