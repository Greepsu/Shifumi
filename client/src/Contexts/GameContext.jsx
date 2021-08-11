import React, { useState, useContext, createContext } from "react";

import { generateRandomNumber } from "../Components/Helper"

const GameContext = createContext({});

const ShifumiWeaponObject = Object.freeze({
  paper: "Paper",
  scissors: "Scissors",
  rock: "Rock",
});

const ShifumiResultObject = Object.freeze({
  win: "Win",
  loose: "Loose",
  draw: "Draw",
});

export function GameContextProvider({ children }) {
  const [userSelection, setUserSelection] = useState()
  const [cpuSelection, setCpuSelection] = useState()
  const [userMatchResult, setUserMatchResult] = useState()

  //Set CPU choice
  const randomCPUSelection = () => {
    const result = generateRandomNumber();
    switch (result) {
      case 0:
        setCpuSelection("Rock");
        break;
      case 1:
        setCpuSelection("Paper");
        break;
      case 2:
        setCpuSelection("Scissors");
        break;
      default:
        console.log(`Sorry, Bot have some issues`);
    }

  //Set CPU choice
  const randomCPUSelection = () => {
    const result = Math.floor(Math.random() * 3);
    switch (result) {
      case 0:
        setCpuSelection("Rock");
        break;
      case 1:
        setCpuSelection("Paper");
        break;
      case 2:
        setCpuSelection("Scissors");
        break;
      default:
        console.log(`Sorry, Bot have some issues`);
    }

    matchResult();
  };

  //Set Match Result
  const matchResult = () => {
    if (
      (userSelection === "Rock" && cpuSelection === "Scissors") ||
      (userSelection === "Paper" && cpuSelection === "Rock") ||
      (userSelection === "Scissors" && cpuSelection === "Paper")
    ) {
      setUserMatchResult("You win !");
    } else if (userSelection === cpuSelection) {
      setUserMatchResult("Draw !");
    } else {
      setUserMatchResult("You loose !");
    }
  };

  console.log(`${userSelection} vs ${cpuSelection} = ${userMatchResult}`);

  const values = { userSelection, cpuSelection, userMatchResult };

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context)
    throw new Error(
      "useGameContext should be used within a GameContextProvider"
    );
  return context;
}
