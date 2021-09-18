const SocketEvents = require("../Enums/events");
const onAddUser = require("./onAddUser");
const onGameStart = require("./onGameStart");
const onDisconnect = require("./onDisconnect");
const onJoinRoom = require("./onJoinRoom");
const onConnected = require("./onConnected");
const onSetReady = require("./onSetReady");

function handleSocketConnection(socket, io) {
  function onSocket(event, callback) {
    socket.on(event, (data) => callback(data, socket, io));
  }

  onSocket(SocketEvents.CONNECTED, onConnected);
  onSocket(SocketEvents.ADD_USER, onAddUser);
  onSocket(SocketEvents.JOIN_ROOM, onJoinRoom);
  onSocket(SocketEvents.SET_READY, onSetReady);
  onSocket(SocketEvents.GAME_START, onGameStart);
  onSocket(SocketEvents.DISCONNECT, onDisconnect);
}

module.exports = handleSocketConnection;
