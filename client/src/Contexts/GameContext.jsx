import React, { useState, useContext, createContext } from "react";

import { generateRandomNumber } from "../Components/Helper";

import { ShifumiWeaponObject, ShifumiResultObject } from "../Enums/Shifumi";

const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const [userSelection, setUserSelection] = useState();
  const [cpuSelection, setCpuSelection] = useState();
  const [userMatchResult, setUserMatchResult] = useState();
  const [score, setScore] = useState(0);

  //Set CPU choice
  function randomCPUSelection() {
    const result = generateRandomNumber();
    switch (result) {
      case 0:
        setCpuSelection(ShifumiWeaponObject.ROCK);
        break;
      case 1:
        setCpuSelection(ShifumiWeaponObject.PAPER);
        break;
      case 2:
        setCpuSelection(ShifumiWeaponObject.SCISSORS);
        break;
      default:
        console.log(`Sorry, Bot have some issues`);
    }

    matchResult();
  }
  
  //Set Match Result
  const compareResult =
    (userSelection === ShifumiWeaponObject.ROCK &&
      cpuSelection === ShifumiWeaponObject.SCISSORS) ||
    (userSelection === ShifumiWeaponObject.PAPER &&
      cpuSelection === ShifumiWeaponObject.ROCK) ||
    (userSelection === ShifumiWeaponObject.SCISSORS &&
      cpuSelection === ShifumiWeaponObject.PAPER);

  function matchResult() {
    if (userSelection && cpuSelection) {
      if (compareResult) {
        setUserMatchResult(ShifumiResultObject.WIN);
        setScore(score + 1);
      } else if (userSelection === cpuSelection) {
        setUserMatchResult(ShifumiResultObject.DRAW);
      } else {
        setUserMatchResult(ShifumiResultObject.LOOSE);
        setScore(score - 1);
      }
    }
  }

  function handleUserSelection(weapon) {
    setUserSelection(weapon);
  }

  function handleCpuSelection(weapon) {
    setCpuSelection(weapon);
  }

  function handlePlayAgain() {
    setUserSelection(undefined);
    setCpuSelection(undefined);
    setUserMatchResult(undefined);
  }

  console.log(`${userSelection} vs ${cpuSelection} = ${userMatchResult}`);

  const values = {
    userSelection,
    cpuSelection,
    userMatchResult,
    handleUserSelection,
    handleCpuSelection,
    handlePlayAgain,
  };

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
