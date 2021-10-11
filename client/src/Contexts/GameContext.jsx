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
  const [readyCount, setReadyCount] = useState(0);
  const [winner, setWinner] = useState();

  useEffect(() => {
    if (room) {
      const copy = { ...room };
      const filteredOpponent = copy.players.find((player) => {
        if (player.id !== user.id) return player;
      });
      setOpponent(filteredOpponent);
    }

    webSocket.on(SocketEvents.SET_LOCKED, (isReady) => {
      setReadyCount(isReady);
    });

    webSocket.on(SocketEvents.SET_WINNER, (winner) => {
      if (winner) setWinner(winner);
    });

    return function cleanup() {
      setReadyCount(0);
    };
  }, [webSocket, room]);

  function handleUserSelection(weapon) {
    setUserSelection(weapon);
  }

  const values = {
    userSelection,
    handleUserSelection,
    opponent,
    readyCount,
    winner,
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
