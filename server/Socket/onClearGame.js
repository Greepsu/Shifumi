const { SocketEvents } = require("../Enums/events");
const getRoom = require("../data/getRoom");

function onClearGame(data, socket, io) {
  const roomId = socket.user.roomId;
  socket.leave(roomId);
}

module.exports = onClearGame;
