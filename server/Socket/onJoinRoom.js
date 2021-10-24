import { SocketEvents } from "../Enums/events.js";
import { database, getRoom } from "../Data/getRoom.js";

export function onJoinRoom(data, socket, io) {
  const roomId = data.roomId;
  const user = data.userInfo;

  const room = getRoom(roomId, user);
  console.log(room);
  console.log("-----");

  database.rooms.find((r) => {
    if (roomId === r.id) console.log(r);
  });

  socket.join(roomId);

  io.to(roomId).emit(SocketEvents.GET_ROOM, room);
}
