import React, { useState, useEffect, useContext, createContext } from 'react';

//Import Contexts
import { useWebSocketContext } from './WebSocketContext';

//Import ENUM
import { SocketEvents } from '../Enums/Shifumi';
import { useUserContext } from './UserContext';

export const RoomContext = createContext({});

export function RoomContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const { user } = useUserContext();
  const [room, setRoom] = useState([]);
  const [showId, setShowId] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [userReady, setUserReady] = useState(0);

  useEffect(() => {
    webSocket.on(SocketEvents.GET_ROOM, (roomUsers) => {
      setRoom(roomUsers);
    });

    webSocket.on('get ready', (ready) => {
      setUserReady(ready);
    });
  }, [webSocket]);

  function joinRoom(id) {
    webSocket.emit(SocketEvents.JOIN_ROOM, id);
    setShowId(true);
    console.log(`Room with ${id} ID just joined by ${user.username}`);
  }

  function getReady() {
    webSocket.emit('set ready', 'az');
    setDisabled(true);
  }

  const values = { joinRoom, room, showId, getReady, disabled, userReady };

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
