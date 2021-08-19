import React, { useState, useEffect, useContext, createContext } from "react";

//Import WebSocketContext
import { useWebSocketContext } from "./WebSocketContext";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const [user, setUser] = useState();

  useEffect(() => {
    webSocket.on("connect", () => {
      setUser(webSocket.id);
      console.log(`User with ${webSocket.id} ID connected on Front`);
    });

    webSocket.on("weapon", (data) => {
      console.log(data);
    });

    return webSocket.on("disconnect", () => {
      console.log(`User with ${webSocket.id} ID disconnected on Front`);
    });
  }, [webSocket]);

  const sendWeapon = (weapon) => webSocket.emit("weapon", weapon);

  const joinRoom = () => webSocket.emit("create", "room1");

  const values = {user, joinRoom};

  return <UserContext.Provider value={values}>{user ? children : <div>Loading</div>}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("UserContext should be used within a UserContextProvider");
  return context;
}
