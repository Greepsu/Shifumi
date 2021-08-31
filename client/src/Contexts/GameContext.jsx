import React, { useState, useEffect, useContext, createContext } from "react";

//Import WebSocketContext
import { useWebSocketContext } from "./WebSocketContext";
import { useUserContext } from "./UserContext";
import { useRoomContext } from "../Contexts/RoomContext";

//Import random number generator for determine CPU selection
import { generateRandomNumber, compareResult } from "../Components/Helper";

//Import enums
import { ShifumiWeaponObject, ShifumiResultObject } from "../Enums/Shifumi";

export const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const { user } = useUserContext();
  const { opponent } = useRoomContext();

  const [userSelection, setUserSelection] = useState();
  const [opponentSelection, setOpponentSelection] = useState("");
  const [userMatchResult, setUserMatchResult] = useState();
  const [score, setScore] = useState(0);

  webSocket.on("player choice", (data) => {
    console.log(`${data.user} choose ${data.weapon}`);
  });

  // const start = () => {
  //   webSocket.emit("selection", { name: user, weapon: userSelection });
  // };

  function start() {
    console.log(user);
    console.log(userSelection);
    if (user) webSocket.emit("player choice", user, userSelection);
  }
  // //Set CPU choice
  // function randomCPUSelection() {
  //   const result = generateRandomNumber();
  //   switch (result) {
  //     case 0:
  //       handleCpuSelection(ShifumiWeaponObject.ROCK);
  //       break;
  //     case 1:
  //       handleCpuSelection(ShifumiWeaponObject.PAPER);
  //       break;
  //     case 2:
  //       handleCpuSelection(ShifumiWeaponObject.SCISSORS);
  //       break;
  //     default:
  //       console.log(`Sorry, Bot have some issues`);
  //   }
  // }

  //Set Match Result
  useEffect(() => {
    if (userSelection && opponentSelection) {
      if (compareResult(userSelection, opponentSelection)) {
        setUserMatchResult(ShifumiResultObject.WIN);
        setScore((prevScore) => prevScore + 1);
      } else if (userSelection === opponentSelection) {
        setUserMatchResult(ShifumiResultObject.DRAW);
      } else {
        setUserMatchResult(ShifumiResultObject.LOOSE);
        setScore((prevScore) => prevScore - 1);
      }
    }
  }, [userSelection, opponentSelection]);

  function handleUserSelection(weapon) {
    setUserSelection(weapon);
    setUserMatchResult(undefined);
  }

  // function handleOpponentSelection() {
  //   webSocket.on("player choice")
  // }

  // function handleCpuSelection(weapon) {
  //   setCpuSelection(weapon);
  // }

  const values = {
    score,
    userSelection,
    opponent,
    userMatchResult,
    handleUserSelection,
    start,
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
