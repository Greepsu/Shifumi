const SocketEvents = require('../Enums/events');
const getRoom = require('../data/getRoom');

const userReady = [];

function onSetReady(data, socket, io) {
  if (socket?.user) {
    // Stock everything inside the io.users
    io.users[socket.id].isReady = !socket.user.isReady;
    socket.user.isReady = !socket.user.isReady;
  }

  const roomId = socket.user.roomId;

  const room = getRoom(userInfo.roomId, io);

  io.to(socket.user.roomId).emit(
    SocketEvents.SET_READY,
    room.players.filter((p) => p.isReady).length
  );

  io.emit(SocketEvents.SET_READY, userReady.length);
}

module.exports = onSetReady;
