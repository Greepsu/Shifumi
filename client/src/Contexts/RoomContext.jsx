import React, { useState, useEffect, useContext, createContext } from 'react';

//Import Contexts
import { useWebSocketContext } from './WebSocketContext';

//Import ENUM
import { SocketEvents } from '../Enums/Shifumi';

export const RoomContext = createContext({});

export function RoomContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const [room, setRoom] = useState();
  const [showId, setShowId] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    webSocket.on(SocketEvents.GET_ROOM, (room) => {
      setRoom(room);
    });

    webSocket.on(SocketEvents.UPDATE_ROOM, (newPlayers) => {
      setRoom((prevRoom) => {
        const copy = { ...prevRoom };
        copy.players = newPlayers;
        return copy;
      });
    });

    webSocket.on(SocketEvents.GAME_START, (roomState) => {
      setRoom((prevRoom) => {
        const copy = { ...prevRoom };
        copy.state = roomState;
        return copy;
      });

      setReady(false);
    });
  }, [webSocket]);

  function joinRoom(roomId, userInfo) {
    webSocket.emit(SocketEvents.JOIN_ROOM, { roomId, userInfo });

    setShowId(true);
    console.log(`Room with ${roomId} ID just joined by ${userInfo.username}`);
  }

  function getReady() {
    setReady(!ready);
    webSocket.emit(SocketEvents.SET_READY);
  }

  const values = {
    joinRoom,
    room,
    showId,
    getReady,
    ready,
  };

  return <RoomContext.Provider value={values}>{children}</RoomContext.Provider>;
}

export function useRoomContext() {
  const context = useContext(RoomContext);
  if (!context)
    throw new Error(
      'useRoomContext should be used within a RoomContextProvider'
    );
  return context;
}
