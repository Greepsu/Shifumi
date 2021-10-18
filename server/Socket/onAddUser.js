const { v4: uuidv4 } = require("uuid");
const { SocketEvents } = require("../Enums/events");

function onAddUser(username, socket, io) {
  //Define socket.user
  socket.user = {
    username,
    id: socket.id,
    roomId: uuidv4(),
  };

  socket.info = {
    username,
    id: socket.user.id,
    roomId: uuidv4(),
  };

  if (io.users === undefined) {
    io.users = {
      [socket.id]: socket.user,
    };
  } else {
    io.users[socket.id] = socket.user;
  }

  socket.username = socket.user.username;

  io.to(socket.id).emit(SocketEvents.GET_USER, socket.info);

  io.to(socket.id).emit(SocketEvents.CONNECTED, socket.username);
}

module.exports = onAddUser;
