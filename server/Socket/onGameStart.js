const SocketEvents = require("../Enums/events");

function onGameStart(username, weapon, socket) {
  console.log(`Username: ${username}`);
  console.log(`Weapon: ${weapon}`);
  choices.push({ user: username, weapon: weapon });
  console.log(`${username} choose ${weapon}`);
  console.log(choices);

  if (choices.length == 2) {
    console.log("[socket.io] Both players have made choices.");
    socket.emit(SocketEvents.GAME_START, choices);
    choices.splice(0, choices.length);
  }
}

module.exports = onGameStart;
