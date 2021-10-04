export const ShifumiWeaponObject = Object.freeze({
  PAPER: 'Paper',
  SCISSORS: 'Scissors',
  ROCK: 'Rock',
});

export const ShifumiResultObject = Object.freeze({
  WIN: 'You Win !',
  LOOSE: 'You Loose !',
  DRAW: 'Draw !',
});

export const SocketEvents = Object.freeze({
  CONNECTION: 'connection',
  CONNECTED: 'connected',
  ADD_USER: 'add_user',
  GET_USER: 'get_user',
  UPDATE_USER: 'update_user',
  CREATE_ROOM: 'create_room',
  GET_ROOM: 'get_room',
  SET_OPPONENT: 'set_opponent',
  UPDATE_ROOM: 'update_room',
  JOIN_ROOM: 'join_room',
  SET_READY: 'set_ready',
  SET_LOCKED: 'set_locked',
  RESET_BUTTON: 'reset_button',
  GAME_START: 'game_start',
  PLAYER_CHOICE: 'player_choice',
  CPU: 'cpu',
  DISCONNECT: 'disconnect',
  DISCONNECTED: 'disconnected',
});
