const getRoom = require('../data/getRoom');
const SocketEvents = require('../Enums/events');

function onJoinRoom(userInfo, socket, io) {
  io.users[socket.id].roomId = userInfo.roomId;

  socket.join(userInfo.roomId);

  const room = getRoom(userInfo.roomId, io);

  io.to(userInfo.roomId).emit(SocketEvents.GET_ROOM, room);
}

module.exports = onJoinRoom;
