const SocketEvents = require("../Enums/events");
const getRoom = require("../data/getRoom");

function onPlayerChoice(weapon, socket, io) {
  const roomId = socket.user.roomId;
  const room = getRoom(roomId, io);
  socket.user.weapon = weapon;
  // ! LE CHANTIER
  const filterWeapon = room.players.filter((player) => player.weapon);

  if (filterWeapon.length === 2) {
    console.log(filterWeapon);

    io.to(socket.id).emit(SocketEvents.UPDATE_ROOM, filterWeapon);
  }
}

module.exports = onPlayerChoice;
