const SocketEvents = require("../Enums/events");
const onAddUser = require("./onAddUser");
const onGameStart = require("./onGameStart");
const onDisconnect = require("./onDisconnect");

function handleSocketConnection(socket, io) {
  function onSocket(event, callback) {
    socket.on(event, (data) => callback(data, socket, io));
  }
  onSocket(SocketEvents.ADD_USER, onAddUser);
  onSocket(SocketEvents.GAME_START, onGameStart);
  onSocket(SocketEvents.DISCONNECT, onDisconnect);
}

module.exports = handleSocketConnection;
