import { SocketEvents } from "../Enums/events.js";

export function onSetReady(data, socket, io) {
  const roomId = socket.user.roomId;
  const room = getRoom(roomId, io);

  socket.user.isReady = !socket.user.isReady;
  const players = room.players.filter((player) => player);
  const playersReady = room.players.filter((player) => {
    socket.user.isReady = false;
    return player;
  });

  io.to(socket).emit(SocketEvents.SET_READY, playersReady.length);

  if (playersReady.length === 2) {
    socket.user.isReady = false;
    io.to(roomId).emit(SocketEvents.UPDATE_ROOM, players);
    room.state = "playing";
    io.to(roomId).emit(SocketEvents.GAME_START, room.state);
  }
}
