const { SocketEvents } = require("../Enums/events");
const getRoom = require("../data/getRoom");

function onSetReady(data, socket, io) {
  socket.user.isReady = !socket.user.isReady;

  const roomId = socket.user.roomId;

  const room = getRoom(roomId, io);
  const playersReady = room.players.filter((p) => {
    p.isReady = false;
    return p;
  });
  io.to(roomId).emit(SocketEvents.SET_READY, playersReady.length);

  if (playersReady.length === 2) {
    socket.user.isReady = false;
    io.to(socket.user.id).emit(SocketEvents.UPDATE_USER, {
      isReady: false,
    });
    io.to(roomId).emit(SocketEvents.UPDATE_ROOM, playersReady);
    room.state = "playing";
    io.to(roomId).emit(SocketEvents.GAME_START, room.state);
  }
}

module.exports = onSetReady;
