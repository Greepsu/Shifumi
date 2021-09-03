import React, { useContext, createContext } from 'react';

//Import Contexts
import { useWebSocketContext } from './WebSocketContext';

//Import ENUM
import { SocketEvents } from '../Enums/Shifumi';
import { useUserContext } from './UserContext';

export const RoomContext = createContext({});

export function RoomContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const { user } = useUserContext();

  function createRoom() {
    webSocket.emit(SocketEvents.CREATE_ROOM, user.roomId);
  }

  function joinRoom(roomId) {
    webSocket.emit(SocketEvents.JOIN_ROOM, roomId);
    console.log('join room');
  }

  const values = { createRoom, joinRoom };

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
