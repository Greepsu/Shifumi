const { ShifumiWeaponObject } = require("../Enums/events");

function generateRandomNumber() {
  Math.floor(Math.random() * 3);
}

//Set CPU choice
function randomCPUSelection() {
  const result = generateRandomNumber();
  switch (result) {
    case 0:
      return ShifumiWeaponObject.ROCK;
    case 1:
      return ShifumiWeaponObject.PAPER;
    case 2:
      return ShifumiWeaponObject.SCISSORS;
    default:
      console.log(`Sorry, Bot have some issues`);
  }
}

module.exports = randomCPUSelection;
