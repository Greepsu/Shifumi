const { SocketEvents } = require("../Enums/events");
const getRoom = require("../data/getRoom");

function onClearGame(data, socket, io) {
  const roomId = socket.info.roomId;
  const room = getRoom(roomId, io);
  socket.leave(roomId);
}

module.exports = onClearGame;
