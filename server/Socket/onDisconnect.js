const SocketEvents = require('../Enums/events');

function onDisconnect(data, socket, io) {
  if (!socket.user) return;

  io.to(socket.user.roomId).emit(SocketEvents.DISCONNECTED, socket.user);
  // TODO: delete the user on io.users (delete io.users[socket.id])
  console.log(`${socket.user} has disconnected`);
}

module.exports = onDisconnect;
