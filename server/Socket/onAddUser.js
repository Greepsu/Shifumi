import { v4 as uuidv4 } from "uuid";
import { SocketEvents } from "../Enums/events.js";

export function onAddUser(username, socket, io) {
  const user = {
    username,
    id: socket.id,
    roomId: uuidv4(),
  };

  io.to(socket.id).emit(SocketEvents.GET_USER, user);

  io.to(socket.id).emit(SocketEvents.CONNECTED, user.username);
}
