import React, { useState, useEffect, useContext, createContext } from "react";

//Import WebSocketContext
import { WebSocketContext } from "./WebSocketContext";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const webSocket = useContext(WebSocketContext);
  const [user, setUser] = useState();

  useEffect(() => {
    webSocket.on("connect", () => {
      setUser(webSocket.id);
      console.log(`User with ${webSocket.id} ID connected on Front`);
    });

    webSocket.on("message", (data) => {
      console.log(data);
    });

    webSocket.emit("create", "room1");

    return webSocket.on("disconnect", () => {
      console.log(`User with ${webSocket.id} ID disconnected on Front`);
    });
  }, [webSocket]);

  const sendMessage = () => {
    webSocket.emit("message", "test");
  };

  const values = user;

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("UserContext should be used within a UserContextProvider");
  return context;
}
