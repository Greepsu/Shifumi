const { v4: uuidv4 } = require("uuid");
const SocketEvents = require("../Enums/events");

function onAddUser(username, socket, io) {
  //Define socket.user
  socket.user = {
    username,
    id: socket.id,
    roomId: uuidv4(),
    isReady: false,
    isWeaponLocked: false,
    weapon: undefined,
  };

  // TODO: delete this user on disconected
  if (io.users === undefined) {
    io.users = {
      [socket.id]: socket.user,
    };
  } else {
    io.users[socket.id] = socket.user;
  }

  socket.username = socket.user.username;

  io.to(socket.id).emit(SocketEvents.GET_USER, socket.user);

  io.to(socket.id).emit(SocketEvents.CONNECTED, socket.username);
}

module.exports = onAddUser;
