const { ShifumiWeaponObject } = require("../Enums/events");

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Set CPU choice
function randomCPUSelection() {
  const Weapon = {
    0: ShifumiWeaponObject.ROCK,
    1: ShifumiWeaponObject.PAPER,
    2: ShifumiWeaponObject.SCISSORS,
  };
  return Weapon[generateRandomNumber(0, 4)];
}

module.exports = randomCPUSelection;
