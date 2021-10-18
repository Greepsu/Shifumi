import { SocketEvents } from "../Enums/events.js";
import { setScore } from "../Data/gameSystem.js";

export function onSetLocked(weapon, socket, io) {
  const roomId = socket.user.roomId;
  const room = getRoom(roomId, io);

  if (!socket.user.score) socket.user.score = 0;
  socket.user.isReady = !socket.user.isReady;
  socket.user.weapon = weapon;

  const players = room.players.filter((player) => player);

  io.to(socket.info.id).emit(SocketEvents.UPDATE_ROOM, players);

  //Manage ready
  const playersReady = room.players.filter((p) => p.isReady);
  io.to(roomId).emit(SocketEvents.SET_LOCKED, playersReady.length);

  function reset() {
    room.players.filter((player) => {
      player.weapon = "";
      player.isReady = false;
      player.resultMatch = "";
    });
    io.to(roomId).emit(SocketEvents.RESET_BUTTON);
    io.to(roomId).emit(SocketEvents.SET_LOCKED, playersReady.length);
    io.to(roomId).emit(SocketEvents.UPDATE_ROOM, players);
  }

  if (playersReady.length === 2 && socket.user.weapon) {
    setScore(socket.user, players);
    io.to(roomId).emit(SocketEvents.UPDATE_ROOM, players);

    room.players.filter((player) => {
      if (player.score === 3) {
        io.to(roomId).emit(SocketEvents.SET_WINNER, player);
        // socket.leave(roomId);
      }
    });
    setTimeout(reset, 2000);
  }
}
