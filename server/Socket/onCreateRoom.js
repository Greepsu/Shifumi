function onCreateRoom(room, socket, io) {
  socket.join(room);
  console.log(io.sockets.adapter.rooms);
  // console.log(socket);
  console.log(`Room with ${room} ID just created by ${socket.username}`);
}

module.exports = onCreateRoom;
