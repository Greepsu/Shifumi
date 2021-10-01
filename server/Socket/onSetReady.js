const { SocketEvents } = require("../Enums/events");
const getRoom = require("../data/getRoom");

function onSetReady(data, socket, io) {
  socket.user.isReady = !socket.user.isReady;

  const roomId = socket.user.roomId;

  const room = getRoom(roomId, io);
  const filterReady = room.players.filter((p) => p.isReady);

  io.to(roomId).emit(SocketEvents.SET_READY, filterReady.length);

  if (filterReady.length === 2) {
    room.state = "playing";
    io.to(roomId).emit(SocketEvents.GAME_START, room.state);
  }
}

module.exports = onSetReady;
