const SocketEvents = require('../Enums/events');

function onConnected(data, socket, io) {
  io.to(socket.user.roomId).emit(SocketEvents.CONNECTED, socket.user);
  console.log(`${socket.user} connected`);
}

module.exports = onConnected;
