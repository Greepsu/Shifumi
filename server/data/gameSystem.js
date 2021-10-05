const { ShifumiWeaponObject, ShifumiResultObject } = require("../Enums/events");

//Compare the result betwwen user choise and cpu choice to see if the user win
function compareResult(roomWeapons) {
  const playerOne = roomWeapons[0];
  const playerTwo = roomWeapons[1];
  return (
    (playerOne === ShifumiWeaponObject.ROCK &&
      playerTwo === ShifumiWeaponObject.SCISSORS) ||
    (playerOne === ShifumiWeaponObject.PAPER &&
      playerTwo === ShifumiWeaponObject.ROCK) ||
    (playerOne === ShifumiWeaponObject.SCISSORS &&
      playerTwo === ShifumiWeaponObject.PAPER)
  );
}

//TODO: Issue here, only increment the 2nd player
function setScore(roomWeapons) {
  const playerOne = roomWeapons[0];
  const playerTwo = roomWeapons[1];
  if (compareResult(roomWeapons)) {
    playerOne.score++;
    playerOne.resultMatch = ShifumiResultObject.WIN;
    playerTwo.resultMatch = ShifumiResultObject.LOOSE;
  } else if (playerOne.weapon === playerTwo.weapon) {
    playerTwo.resultMatch = ShifumiResultObject.DRAW;
    playerOne.resultMatch = ShifumiResultObject.DRAW;
  } else {
    playerTwo.score++;
    playerTwo.resultMatch = ShifumiResultObject.WIN;
    playerOne.resultMatch = ShifumiResultObject.LOOSE;
  }
}

module.exports = setScore;
