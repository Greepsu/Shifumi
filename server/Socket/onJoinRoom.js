const getRoom = require("../data/getRoom");
const { SocketEvents } = require("../Enums/events");

function onJoinRoom(userInfo, socket, io) {
  io.users[socket.id].roomId = userInfo.roomId;
  const room = getRoom(userInfo.roomId, io);
  if (room.players.length > 2) {
    return;
  }

  socket.join(userInfo.roomId);

  io.to(userInfo.roomId).emit(SocketEvents.GET_ROOM, room);
}

module.exports = onJoinRoom;
