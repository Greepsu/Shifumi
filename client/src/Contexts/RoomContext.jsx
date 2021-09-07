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
  console.log(room);

  useEffect(() => {
    webSocket.on(SocketEvents.GET_ROOM, (roomUsers) => {
      setRoom(roomUsers);
    });
  }, [webSocket]);

  function joinRoom(id) {
    webSocket.emit(SocketEvents.JOIN_ROOM, id);
    console.log(`Room with ${id} ID just joined by ${user.username}`);
  }

  const values = { joinRoom };

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
