const SocketEvents = require("../Enums/events");
const rooms = []; //Pas trouvé de meilleur solution pour exporter le contenu de la room sur le front

function onJoinRoom(userInfo, socket, io) {
  console.log(userInfo);
  const user = userInfo.userInfo;
  socket.join(userInfo.roomId);
  console.log(
    `Room with ${userInfo.roomId} ID just joined by ${user.username}`
  );
  console.log(io.sockets.adapter.rooms);
  const roomUsers = io.sockets.adapter.rooms.get(userInfo.roomId);

  roomUsers.forEach((id) => {
    if (id === user.id) rooms.push(user.username);
  });

  socket.on(SocketEvents.DISCONNECT, () => {
    console.log(`${user.username} left the room`);
    const index = rooms.indexOf(user.username);
    if (index > -1) {
      rooms.splice(index, 1);
    }
    io.emit(SocketEvents.GET_ROOM, rooms);
  });

  io.emit(SocketEvents.GET_ROOM, rooms);
}

module.exports = onJoinRoom;
