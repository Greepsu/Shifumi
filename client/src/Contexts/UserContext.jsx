import React, { useState, useEffect, useContext, createContext } from 'react';

//Import WebSocketContext
import { useWebSocketContext } from './WebSocketContext';

//Import ENUM
import { SocketEvents } from '../Enums/Shifumi';

// Import Components
import Login from '../Components/Login';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const [user, setUser] = useState();

  useEffect(() => {
    if (user) {
      webSocket.on(SocketEvents.CONNECTED);
    }

    webSocket.on(SocketEvents.GET_USER, (user) => {
      setUser(user);
    });

    webSocket.on(SocketEvents.UPDATE_USER, (user) => {
      setUser((prev) => ({ ...prev, ...user }));
    });

    webSocket.on(SocketEvents.DISCONNECT);
  }, [webSocket]);

  console.log({ user });

  const values = { user };

  return (
    <UserContext.Provider value={values}>
      {user ? children : <Login />}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context)
    throw new Error('UserContext should be used within a UserContextProvider');
  return context;
}
