const { SocketEvents } = require("../Enums/events");
const getRoom = require("../data/getRoom");

function onDisconnect(data, socket, io) {
  const roomId = socket.user.roomId;
  const room = getRoom(roomId, io);

  //! MEH
  if (room.players.length === 2) {
    const removeIndex = room.players.findIndex(
      (player) => player.id === socket.id
    );
    room.players.splice(removeIndex, 1);

    io.to(roomId).emit(SocketEvents.UPDATE_ROOM, room.players);
  }
  //! MEH

  console.log(room);
  console.log(`${socket.id} has disconnected`);
}

module.exports = onDisconnect;
