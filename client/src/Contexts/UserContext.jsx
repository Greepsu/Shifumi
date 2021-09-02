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

  console.log(user);

  useEffect(() => {
    if (user) {
      webSocket.on(SocketEvents.CONNECTED, (username) => {
        console.log(`${username} joined the room`);
      });
    }

    webSocket.on(SocketEvents.GET_USER, (username) => {
      console.log(username);
      setUser(username);
    });

    webSocket.on(SocketEvents.DISCONNECTED, (username) => {
      console.log(`${username} left the room`);
    });
  }, [webSocket, user]);

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
