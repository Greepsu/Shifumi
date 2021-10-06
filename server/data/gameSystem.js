const { ShifumiWeaponObject, ShifumiResultObject } = require("../Enums/events");

function setWin(user, opponent) {
  return (
    (user.weapon === ShifumiWeaponObject.ROCK &&
      opponent.weapon === ShifumiWeaponObject.SCISSORS) ||
    (user.weapon === ShifumiWeaponObject.PAPER &&
      opponent.weapon === ShifumiWeaponObject.ROCK) ||
    (user.weapon === ShifumiWeaponObject.SCISSORS &&
      opponent.weapon === ShifumiWeaponObject.PAPER)
  );
}

function setScore(user, roomPlayers) {
  const opponent = roomPlayers.find((player) => player.id !== user.id);
  const win = setWin(user, opponent);
  console.log(win);
  if (win) {
    user.score++;
    user.resultMatch = ShifumiResultObject.WIN;
    opponent.resultMatch = ShifumiResultObject.LOOSE;
  } else if (user.weapon === opponent.weapon) {
    opponent.resultMatch = ShifumiResultObject.DRAW;
    user.resultMatch = ShifumiResultObject.DRAW;
  } else {
    opponent.score++;
    opponent.resultMatch = ShifumiResultObject.WIN;
    user.resultMatch = ShifumiResultObject.LOOSE;
  }
}

module.exports = setScore;
