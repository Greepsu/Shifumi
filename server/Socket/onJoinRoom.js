function onJoinRoom(room, socket) {
  socket.to(room).emit(socket.user);
  console.log(`Room with ${room} ID Joined by ${socket.username}`);
}

module.exports = onJoinRoom;
