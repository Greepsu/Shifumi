const SocketEvents = require("../Enums/events");

const userReady = [];
function onSetReady(data, socket, io) {
  if (socket) {
    socket.user.isReady = !socket.user.isReady;
  }
  console.log(socket.user.isReady);
  if (socket.user.isReady) {
    userReady.push(socket.user.username);
  } else {
    const index = userReady.indexOf(socket.user.username);
    if (index > -1) {
      userReady.splice(index, 1);
    }
  }
  console.log(userReady);
  io.emit(SocketEvents.SET_READY, userReady.length);

  socket.on(SocketEvents.DISCONNECT, () => {
    console.log(`${socket.user.username} left the room`);
    const index = userReady.indexOf(socket.user.username);
    if (index > -1) {
      userReady.splice(index, 1);
    }
    io.emit(SocketEvents.SET_READY, userReady.length);
  });
}

module.exports = onSetReady;
