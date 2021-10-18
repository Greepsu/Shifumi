function getRoom(roomId, io) {
  const room = {
    id: roomId,
    state: "idle",
    players: [],
  };

  Object.keys(io.users).forEach((key) => {
    const user = io.users[key];

    if (user.roomId === roomId) {
      room.players.push(user);
    }
  });

  return room;
}

module.exports = getRoom;
