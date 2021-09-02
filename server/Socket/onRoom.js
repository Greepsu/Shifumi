const SocketEvents = require("../Enums/events");

function onRoom(socket) {
  socket.emit("room", "room created");
}

module.exports = onRoom;
