const SocketEvents = require("../Enums/events");

function onDisconnect(io) {
  io.emit(SocketEvents.DISCONNECTED, "socket.username");
}

module.exports = onDisconnect;
