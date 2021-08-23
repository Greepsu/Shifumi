import React, { useState, useEffect, useContext, createContext } from "react";

//Import Components
import Login from "../Components/Login";

//Import WebSocketContext
import { useWebSocketContext } from "./WebSocketContext";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const [user, setUser] = useState('');

  const values = { user, setUser };

  return <UserContext.Provider value={values}>{user ? children : <Login />}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("UserContext should be used within a UserContextProvider");
  return context;
}
