const SocketEvents = require("../Enums/events");
const onAddUser = require("./onAddUser");
const onGameStart = require("./onGameStart");
const onDisconnect = require("./onDisconnect");
const onRoom = require("./onRoom");

function handleSocketConnection(socket, io) {
  function onSocket(event, callback) {
    socket.on(event, (data) => callback(data, socket, io));
  }
  // function onJoin(event, callback) {
  //   socket.join(event, (data) => callback(data, socket, io));
  // }
  onSocket(SocketEvents.ADD_USER, onAddUser);
  // onJoin(SocketEvents.ROOM, onRoom);
  onSocket(SocketEvents.GAME_START, onGameStart);
  onSocket(SocketEvents.DISCONNECT, onDisconnect);
}

module.exports = handleSocketConnection;
