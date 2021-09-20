const SocketEvents = require("../Enums/events");

function onDisconnect(data, socket, io) {
  if (!socket.user) return;

  delete io.users[socket.id];
  io.to(socket.user).emit(SocketEvents.DISCONNECTED, socket.user);
  console.log(`${socket.user.username} has disconnected`);
}

module.exports = onDisconnect;
