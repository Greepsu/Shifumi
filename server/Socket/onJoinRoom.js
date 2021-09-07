const SocketEvents = require("../Enums/events");
function onJoinRoom(room, socket, io) {
  console.log(room);
  socket.join(room);
  const roomUsers = io.sockets.adapter.rooms.get(room);
  const rooms = []; //Pas trouvé de meilleur solution pour exporter le contenu de la room sur le front

  console.log(roomUsers);
  roomUsers.forEach((user) => {
    rooms.push(user);
  });

  io.emit(SocketEvents.GET_ROOM, rooms);
  // socket.emit("get room", roomUsers);
  // console.log(socket);
  console.log(`Room with ${room} ID just created by ${socket.username}`);
}

module.exports = onJoinRoom;
