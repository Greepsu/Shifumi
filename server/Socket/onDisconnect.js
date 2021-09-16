const SocketEvents = require("../Enums/events");

function onDisconnect(data, socket, io) {
  if (!socket.user) return;

  io.to(socket.user.roomId).emit(SocketEvents.DISCONNECTED, socket.user);
  console.log(`${socket.user.username} has disconnected`);
  delete io.users[socket.id];
}

module.exports = onDisconnect;
