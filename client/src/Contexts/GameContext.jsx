import React, { useState, useEffect, useContext, createContext } from 'react';

//Import WebSocketContext
import { useWebSocketContext } from './WebSocketContext';
import { useUserContext } from './UserContext';
import { useRoomContext } from '../Contexts/RoomContext';

//Import random number generator for determine CPU selection
import { compareResult } from '../Components/Helper';

//Import enums
import { ShifumiResultObject } from '../Enums/Shifumi';
import { SocketEvents } from '../Enums/Shifumi';

export const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const { user } = useUserContext();
  const { room } = useRoomContext();

  const [opponent, setOpponent] = useState();
  const [userSelection, setUserSelection] = useState();
  const [userMatchResult, setUserMatchResult] = useState();
  const [score, setScore] = useState(0);
  const [readyCount, setReadyCount] = useState(0);

  useEffect(() => {
    if (room) {
      const copy = { ...room };
      const filteredOpponent = copy.players.filter((player) => {
        if (player.id !== user.id) return player;
      });
      setOpponent(filteredOpponent[0]);
    }

    webSocket.on(SocketEvents.SET_LOCKED, (isReady) => {
      setReadyCount(isReady);
    });
  }, [webSocket, room, readyCount]);

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
    if (userSelection && opponent.weapon) {
      if (compareResult(userSelection, opponent.weapon)) {
        setUserMatchResult(ShifumiResultObject.WIN);
        setScore((prevScore) => prevScore + 1);
      } else if (userSelection === opponent.weapon) {
        setUserMatchResult(ShifumiResultObject.DRAW);
      } else {
        setUserMatchResult(ShifumiResultObject.LOOSE);
        setScore((prevScore) => prevScore - 1);
      }
    }
  }, [userSelection, opponent]);

  function handleUserSelection(weapon) {
    setUserSelection(weapon);
    setUserMatchResult(undefined);
  }

  const values = {
    score,
    userSelection,
    userMatchResult,
    handleUserSelection,
    opponent,
    readyCount,
  };

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context)
    throw new Error(
      'useGameContext should be used within a GameContextProvider'
    );
  return context;
}
