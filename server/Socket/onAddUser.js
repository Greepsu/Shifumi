const SocketEvents = require("../Enums/events");

function onAddUser(socket, io) {
  console.log(`Io: ${io.socket}`);
  console.log(`Socket: ${socket}`);

  // //Define socket.username
  // socket.user = { username: "username", id: "socket.id", roomId: "room.id" };

  // socket.username = socket.user.username;

  // //Emit username to the front (user state)
  // socket.emit(SocketEvents.GET_USER, socket.user);

  // //Emit username for new connection
  // io.emit(SocketEvents.CONNECTED, socket.username);
}

module.exports = onAddUser;
