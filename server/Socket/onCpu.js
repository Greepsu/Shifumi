const { SocketEvents } = require("../Enums/events");
const getRoom = require("../Data/getRoom");

export function onCpu(data, socket, io) {
  const cpu = {
    username: "Biboubip",
    id: "1010100110101",
    roomId: "0",
    isReady: true,
    weapon: "rock",
  };

  io.to(socket.user.roomId).emit(SocketEvents.CPU, cpu);
}
