const SocketEvents = require("../Enums/events");

function onDisconnect(data, socket, io) {
  if (!socket.user) return;

  console.log(io.users);
  delete io.users[socket.id];
  io.to(socket.user).emit(SocketEvents.DISCONNECTED, socket.user);
  console.log(`${socket.user.username} has disconnected`);
  console.log(io.users);
}

module.exports = onDisconnect;
