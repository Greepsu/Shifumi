function getRoom(roomId, io) {
  const room = {
    id: roomId,
    state: "idle",
    players: [],
  };

  // TODO: try this `room.socketId.forEach(id => io.users[id])`

  Object.keys(io.users).forEach((key) => {
    const user = io.users[key];

    if (user.roomId === roomId) {
      room.players.push(user);
    }
  });

  return room;
}

module.exports = getRoom;
