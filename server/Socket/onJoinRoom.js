import { SocketEvents } from "../Enums/events.js";
import { database } from "../Data/getRoom.js";

export function onJoinRoom(data, socket, io) {
  const roomId = data.roomId;
  const user = data.userInfo;

  const room = database.rooms.find((room) => room);

  database.rooms.find((room) => {
    room.id === roomId
      ? room.players.push(user)
      : database.rooms.push({
          id: roomId,
          state: "idle",
          players: [],
        });
  });

  console.log(database.rooms);

  socket.join(roomId);

  io.to(roomId).emit(SocketEvents.GET_ROOM, room);
}
