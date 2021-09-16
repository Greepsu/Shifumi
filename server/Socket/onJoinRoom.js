const getRoom = require("../data/getRoom");
const SocketEvents = require("../Enums/events");

function onJoinRoom(userInfo, socket, io) {
  io.users[socket.id].roomId = userInfo.roomId;

  const room = getRoom(userInfo.roomId, io);
  room.players.length <= 2
    ? socket.join(userInfo.roomId)
    : console.log("Room full");

  io.to(userInfo.roomId).emit(SocketEvents.GET_ROOM, room);
}

module.exports = onJoinRoom;
