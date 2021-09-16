const SocketEvents = require("../Enums/events");
const getRoom = require("../data/getRoom");

function onSetReady(data, socket, io) {
  // Stock everything inside the io.users
  // io.users[socket.id].isReady = !io.users[socket.id].isReady;
  socket.user.isReady = !socket.user.isReady;

  const roomId = socket.user.roomId;

  const room = getRoom(roomId, io);

  io.to(roomId).emit(
    SocketEvents.SET_READY,
    room.players.filter((p) => p.isReady).length
  );
}

module.exports = onSetReady;
