import React, { useState, useEffect, useContext, createContext } from "react";

//Import WebSocketContext
import { useWebSocketContext } from "./WebSocketContext";
import { useUserContext } from "./UserContext";

//Import random number generator for determine CPU selection
import { generateRandomNumber, compareResult } from "../Components/Helper";

//Import enums
import { ShifumiWeaponObject, ShifumiResultObject } from "../Enums/Shifumi";

export const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const { user } = useUserContext();

  const [userSelection, setUserSelection] = useState();
  const [selection, setSelection] = useState({ name: user, weapon: userSelection })
  const [all, setAll] = useState([])


  const [cpuSelection, setCpuSelection] = useState();


  const [opponentSelection, setOpponentSelection] = useState();
  const [userMatchResult, setUserMatchResult] = useState();
  const [score, setScore] = useState(0);

  console.log(all)


  useEffect(() => {
    const { name } = selection
    const weapon = userSelection
    webSocket.emit("selection", { name, weapon })
    setAll([...all, { name, weapon }])

    return webSocket.on("disconnect", () => {
      console.log(`${user} disconnected on Front`);
    });
  }, [webSocket, userSelection, selection]);

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


  //Set Match Result
  useEffect(() => {
    if (userSelection && cpuSelection) {
      if (compareResult(userSelection, cpuSelection)) {
        setUserMatchResult(ShifumiResultObject.WIN);
        setScore((prevScore) => prevScore + 1);
      } else if (userSelection === cpuSelection) {
        setUserMatchResult(ShifumiResultObject.DRAW);
      } else {
        setUserMatchResult(ShifumiResultObject.LOOSE);
        setScore((prevScore) => prevScore - 1);
      }
    }
  }, [userSelection, cpuSelection]);

  function handleUserSelection(weapon) {
    setUserSelection(weapon);
    handleCpuSelection(undefined);
    setUserMatchResult(undefined);
  }

  function handleCpuSelection(weapon) {
    setCpuSelection(weapon);
  }

  const values = {
    score,
    userSelection,
    cpuSelection,
    userMatchResult,
    handleUserSelection,
    randomCPUSelection,
    all
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