const { SocketEvents } = require("../Enums/events");
const getRoom = require("../data/getRoom");
const compareResult = require("../data/helper");

function onSetLocked(weapon, socket, io) {
  socket.user.isReady = !socket.user.isReady;

  // console.log(socket.user.isReady);

  const roomId = socket.user.roomId;
  const room = getRoom(roomId, io);

  //Manage weapon
  socket.user.weapon = weapon;
  const weaponsPlayers = room.players.filter((player) => player.weapon);

  //Manage ready
  io.to(socket.user.id).emit(SocketEvents.UPDATE_USER, {
    isReady: socket.user.isReady,
  });

  const playersReady = room.players.filter((p) => p.isReady);

  io.to(roomId).emit(SocketEvents.SET_LOCKED, playersReady.length);

  function reset() {
    room.players.filter((player) => {
      player.weapon = "";
      player.isReady = false;
    });
    socket.user.weapon = false;
    socket.user.isReady = false;

    io.to(socket.id).emit(SocketEvents.UPDATE_USER, {
      isReady: false,
    });
    io.to(roomId).emit(SocketEvents.RESET_BUTTON);
    io.to(roomId).emit(SocketEvents.SET_LOCKED, playersReady.length);
    io.to(roomId).emit(SocketEvents.UPDATE_ROOM, weaponsPlayers);
  }

  if (playersReady.length === 2) {
    //TODO: Set result here
    io.to(roomId).emit(SocketEvents.UPDATE_ROOM, weaponsPlayers);
    setTimeout(reset, 3000);
  }
}

module.exports = onSetLocked;
