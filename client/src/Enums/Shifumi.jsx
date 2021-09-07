export const ShifumiWeaponObject = Object.freeze({
  PAPER: 'Paper',
  SCISSORS: 'Scissors',
  ROCK: 'Rock',
});

export const ShifumiResultObject = Object.freeze({
  WIN: 'Win',
  LOOSE: 'Loose',
  DRAW: 'Draw',
});

export const SocketEvents = Object.freeze({
  CONNECTION: 'connection',
  CONNECTED: 'connected',
  ADD_USER: 'add user',
  GET_USER: 'get user',
  CREATE_ROOM: 'create room',
  GET_ROOM: 'get room',
  JOIN_ROOM: 'join room',
  GAME_START: 'game start',
  PLAYER_CHOICE: 'player choice',
  DISCONNECT: 'disconnect',
  DISCONNECTED: 'disconnected',
});
