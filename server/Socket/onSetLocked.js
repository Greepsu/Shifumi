const { SocketEvents } = require("../Enums/events");
const getRoom = require("../data/getRoom");
const setScore = require("../data/gameSystem");

function onSetLocked(weapon, socket, io) {
  socket.user.isReady = !socket.user.isReady;

  const roomId = socket.user.roomId;
  const room = getRoom(roomId, io);

  //Manage weapon
  socket.user.weapon = weapon;
  const players = room.players.filter((player) => player.weapon);

  //Manage ready
  io.to(socket.user.id).emit(SocketEvents.UPDATE_USER, {
    weapon: socket.user.weapon,
    isReady: socket.user.isReady,
  });
  const playersReady = room.players.filter((p) => p.isReady);
  io.to(roomId).emit(SocketEvents.SET_LOCKED, playersReady.length);

  function reset() {
    room.players.filter((player) => {
      player.weapon = "";
      player.isReady = false;
      player.resultMatch = "";
    });

    io.to(socket.id).emit(SocketEvents.UPDATE_USER, {
      isReady: false,
    });
    io.to(roomId).emit(SocketEvents.RESET_BUTTON);
    io.to(roomId).emit(SocketEvents.SET_LOCKED, playersReady.length);
    io.to(roomId).emit(SocketEvents.UPDATE_ROOM, players);
  }

  if (playersReady.length === 2 && socket.user.weapon) {
    setScore(socket.user, players);
    io.to(socket.user.id).emit(SocketEvents.UPDATE_USER, {
      resultMatch: socket.user.resultMatch,
      score: socket.user.score,
    });

    room.players.filter((player) => {
      if (player.score === 10) {
        io.to(roomId).emit(SocketEvents.SET_WINNER, player);
      }
    });

    io.to(roomId).emit(SocketEvents.UPDATE_ROOM, players);
    setTimeout(reset, 2000);
  }
}

module.exports = onSetLocked;
