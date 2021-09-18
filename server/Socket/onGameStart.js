const SocketEvents = require("../Enums/events");

function onGameStart(data, socket, io) {
  console.log("gameStart");
}

module.exports = onGameStart;
