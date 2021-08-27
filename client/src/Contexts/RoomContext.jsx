import React, { useState, useEffect, useContext, createContext } from 'react';

//Import Contexts
import { useWebSocketContext } from './WebSocketContext';

export const RoomContext = createContext({});

export function RoomContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const [users, setUsers] = useState([]);
  console.log(`Users: ${users}`);

  useEffect(() => {
    webSocket.on('get users', (usernames) => {
      console.log(`Data: ${usernames}`);
      setUsers(usernames);
    });
  }, [webSocket]);

  return <RoomContext.Provider value={users}>{children}</RoomContext.Provider>;
}

export function useRoomContext() {
  const context = useContext(RoomContext);
  if (!context)
    throw new Error('useRoomContext should be used within a RoomContextProvider');
  return context;
}
