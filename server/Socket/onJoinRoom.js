function onJoinRoom(room, socket) {
  console.log(`Room with ${room} ID Joined by ${socket.username}`);
  socket.to(room).emit(socket.user);
}

module.exports = onJoinRoom;
