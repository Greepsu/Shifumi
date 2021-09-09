const SocketEvents = require("../Enums/events");

const array = [];
function onSetReady(number, socket, io) {
  array.push(number);
  console.log(array);
  const userReady = array.length;
  console.log(userReady);
  io.emit("get ready", userReady);
}

module.exports = onSetReady;
