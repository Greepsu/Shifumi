//Genrate a random number for determine a CPU choice
const generateRandomNumber = () => Math.floor(Math.random() * 3);

//Compare the result betwwen user choise and cpu choice to see if the user win
const compareResult = (userSelection, cpuSelection) => {
  return (
    (userSelection === ShifumiWeaponObject.ROCK &&
      cpuSelection === ShifumiWeaponObject.SCISSORS) ||
    (userSelection === ShifumiWeaponObject.PAPER &&
      cpuSelection === ShifumiWeaponObject.ROCK) ||
    (userSelection === ShifumiWeaponObject.SCISSORS &&
      cpuSelection === ShifumiWeaponObject.PAPER)
  );
};

module.exports = compareResult;
