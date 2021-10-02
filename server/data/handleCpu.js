const { ShifumiWeaponObject } = require("../Enums/events");

function generateRandomNumber(min, max) {
  Math.floor(Math.random() * (max - min)) + min;
}

//Set CPU choice
function randomCPUSelection() {
  const Weapon = {
    0: ShifumiWeaponObject.ROCK,
    1: ShifumiWeaponObject.PAPER,
    2: ShifumiWeaponObject.SCISSORS,
  };
  return Weapon[generateRandomNumber(1, 3)];
}

module.exports = randomCPUSelection;
