//Genrate a random number for determine a CPU choice
const generateRandomNumber = () => Math.floor(Math.random() * 3);

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
  io.to(roomId).emit(SocketEvents.UPDATE_ROOM, weaponsPlayers);
}

module.exports = { generateRandomNumber };
