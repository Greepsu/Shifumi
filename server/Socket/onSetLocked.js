const SocketEvents = require("../Enums/events");
const getRoom = require("../data/getRoom");

function onSetLocked(weapon, socket, io) {
  socket.user.isWeaponLocked = !socket.user.isWeaponLocked;

  const roomId = socket.user.roomId;
  const room = getRoom(roomId, io);

  const filterLocked = room.players.filter((p) => p.isWeaponLocked);

  io.to(roomId).emit(SocketEvents.SET_LOCKED, filterLocked.length);

  socket.user.weapon = weapon;
  const filterWeapon = room.players.filter((player) => player.weapon);

  function reset() {
    room.players.filter((player) => {
      player.weapon = "";
      player.isWeaponLocked = false;
    });
    socket.user.isWeaponLocked = false;
    socket.user.weapon = weapon = false;
    io.to(roomId).emit(SocketEvents.SET_LOCKED, 0);
    io.to(roomId).emit(SocketEvents.RESET_BUTTON);
    io.to(roomId).emit(SocketEvents.UPDATE_ROOM, filterWeapon);
    console.log("reset done");
  }

  if (filterLocked.length === 2) {
    io.to(roomId).emit(SocketEvents.UPDATE_ROOM, filterWeapon);
    setTimeout(reset, 3000);
  }
}

module.exports = onSetLocked;
