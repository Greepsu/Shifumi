function onCreateRoom(room, socket) {
  socket.join(room);
  console.log(`Room with ${room} ID just created by ${socket.username}`);
}

module.exports = onCreateRoom;
