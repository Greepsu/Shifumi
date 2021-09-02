const { v4: uuidv4 } = require("uuid");
const SocketEvents = require("../Enums/events");

function onAddUser(data, socket, io) {
  console.log(`Data: ${data}`);
  console.log(`SocketID: ${socket.id}`);

  //Define socket.username
  socket.user = { username: data, id: socket.id, roomId: uuidv4() };

  socket.username = socket.user.username;

  //Emit username to the front (user state)
  socket.emit(SocketEvents.GET_USER, socket.user);

  //Emit username for new connection
  io.emit(SocketEvents.CONNECTED, socket.username);
}

module.exports = onAddUser;
