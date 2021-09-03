const SocketEvents = require("../Enums/events");

function onConnected(data, socket, io) {
  io.emit(SocketEvents.CONNECTED, socket.username);
  console.log(`${socket.username} connected`);
}

module.exports = onConnected;
