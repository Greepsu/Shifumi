export function onClearGame(data, socket, io) {
  const roomId = socket.info.roomId;
  const room = getRoom(roomId, io);
  socket.leave(roomId);
}
