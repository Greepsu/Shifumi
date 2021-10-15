const { SocketEvents } = require("../Enums/events");

function onConnected(data, socket, io) {
  console.log(data);
}

module.exports = onConnected;
