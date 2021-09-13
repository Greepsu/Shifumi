const SocketEvents = require("../Enums/events");

function onDisconnect(data, socket, io) {
  io.emit(SocketEvents.DISCONNECTED, socket.username);
  console.log(`${socket.username} has disconnected`);
}

module.exports = onDisconnect;
