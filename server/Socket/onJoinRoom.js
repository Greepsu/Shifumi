const SocketEvents = require("../Enums/events");
const rooms = []; //Pas trouvé de meilleur solution pour exporter le contenu de la room sur le front

function onJoinRoom(userInfo, socket, io) {
  const user = userInfo.userInfo;
  console.log(user);
  socket.join(userInfo.roomId);
  const roomUsers = io.sockets.adapter.rooms.get(userInfo.roomId);

  roomUsers.forEach((id) => {
    if (id === user.id) {
      rooms.push(user.username);
    }
    console.log(rooms);
  });

  io.emit(SocketEvents.GET_ROOM, rooms);
  // socket.emit("get room", roomUsers);
  // console.log(socket);
  console.log(
    `Room with ${userInfo.roomId} ID just created by ${userInfo.username}`
  );
}

module.exports = onJoinRoom;
