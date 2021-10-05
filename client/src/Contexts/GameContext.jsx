import React, { useState, useEffect, useContext, createContext } from 'react';

//Import WebSocketContext
import { useWebSocketContext } from './WebSocketContext';
import { useUserContext } from './UserContext';
import { useRoomContext } from '../Contexts/RoomContext';

//Import enums
import { SocketEvents } from '../Enums/Shifumi';

export const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const { user } = useUserContext();
  const { room } = useRoomContext();

  const [opponent, setOpponent] = useState({});
  const [userSelection, setUserSelection] = useState();
  const [userMatchResult, setUserMatchResult] = useState();
  const [readyCount, setReadyCount] = useState(0);

  useEffect(() => {
    if (room) {
      const copy = { ...room };
      console.log(copy);
      const filteredOpponent = copy.players.find((player) => {
        if (player.id !== user.id) return player;
      });
      setOpponent(filteredOpponent);
    }

    webSocket.on(SocketEvents.SET_LOCKED, (isReady) => {
      setReadyCount(isReady);
    });

    webSocket.on(SocketEvents.SET_WINNER, (winner) => {
      console.log(`Winner: ${winner.username}`);
    });
  }, [webSocket, room]);

  function handleUserSelection(weapon) {
    setUserSelection(weapon);
    setUserMatchResult(undefined);
  }

  const values = {
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
