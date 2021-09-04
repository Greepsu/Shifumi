function onJoinRoom(room, socket, io) {
  socket.join(room);
  console.log(`Room with ${room} ID Joined by ${socket.username}`);
  console.log(io.sockets.adapter.rooms);
}

module.exports = onJoinRoom;
