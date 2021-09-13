const { v4: uuidv4 } = require("uuid");
const SocketEvents = require("../Enums/events");

function onAddUser(username, socket, io) {
  //Define socket.username
  socket.user = { username, id: socket.id, roomId: uuidv4(), isReady: false };

  socket.username = socket.user.username;

  //Emit username to the front (user state)
  socket.emit(SocketEvents.GET_USER, socket.user);

  //Emit username for new connection
  io.emit(SocketEvents.CONNECTED, socket.username);
}

module.exports = onAddUser;
