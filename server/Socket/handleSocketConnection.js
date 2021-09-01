const SocketEvents = require("../Enums/events");
const onAddUser = require("./onAddUser");
const onGameStart = require("./onGameStart");
const onDisconnect = require("./onDisconnect");

function handleSocketConnection(io) {
  io.on(SocketEvents.CONNECTION, (socket) => {
    socket.on(SocketEvents.ADD_USER, onAddUser);
    socket.on(SocketEvents.GAME_START, onGameStart);
    socket.on(SocketEvents.DISCONNECT, onDisconnect);
  });
}

module.exports = handleSocketConnection;
