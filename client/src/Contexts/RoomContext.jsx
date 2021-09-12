import React, { useState, useEffect, useContext, createContext } from 'react';

//Import Contexts
import { useWebSocketContext } from './WebSocketContext';

//Import ENUM
import { SocketEvents } from '../Enums/Shifumi';

export const RoomContext = createContext({});

export function RoomContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const [room, setRoom] = useState([]);
  const [showId, setShowId] = useState(false);
  const [ready, setReady] = useState(false);
  const [readyCount, setReadyCount] = useState(0);

  useEffect(() => {
    webSocket.on(SocketEvents.GET_ROOM, (roomUsers) => {
      setRoom(roomUsers);
    });

    webSocket.on(SocketEvents.SET_READY, (isReady) => {
      setReadyCount(isReady);
    });
    console.log(ready);
  }, [webSocket, ready]);

  function joinRoom(roomId, userInfo) {
    webSocket.emit(SocketEvents.JOIN_ROOM, { roomId, userInfo });
    setShowId(true);
    console.log(`Room with ${roomId} ID just joined by ${userInfo.username}`);
  }

  function getReady() {
    webSocket.emit(SocketEvents.SET_READY);
    setReady(!ready);
  }

  const values = { joinRoom, room, showId, getReady, readyCount, ready };

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
