function handleCpuSelection(weapon) {
    setCpuSelection(weapon);
  }

//Set CPU choice
function randomCPUSelection() {
    const result = generateRandomNumber();
    switch (result) {
      case 0:
        handleCpuSelection(ShifumiWeaponObject.ROCK);
        break;
      case 1:
        handleCpuSelection(ShifumiWeaponObject.PAPER);
        break;
      case 2:
        handleCpuSelection(ShifumiWeaponObject.SCISSORS);
        break;
      default:
        console.log(`Sorry, Bot have some issues`);
    }
  }