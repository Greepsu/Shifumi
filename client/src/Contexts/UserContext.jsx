import React, { useState, useEffect, useContext, createContext } from "react";

//Import Components
import Login from "../Components/Login";

//Import WebSocketContext
import { useWebSocketContext } from "./WebSocketContext";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const [user, setUser] = useState('');

  useEffect(() => {

    console.log(`UserContext : user = ${user}`)

    if (user === '') {
      console.log("No user")
    } else {
      webSocket.on("connect", () => {
        webSocket.emit('add user', user);
        console.log(`User ${user} connected on Front`);
      });

      webSocket.on("weapon", (data) => {
        console.log(data);
      });

      webSocket.emit("create", "room1");

      webSocket.on('login', (data) => {
        const message = 'Welcome to Socket.IO Chat – ';
        console.log(data);
      });

      return webSocket.on("disconnect", () => {
        console.log(`User ${user} disconnected on Front`);
      });
    }
  }, [webSocket, user]);

  // const sendWeapon = (weapon) => webSocket.emit("weapon", weapon);

  const values = { user, setUser };

  return <UserContext.Provider value={values}>{user ? children : <Login />}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("UserContext should be used within a UserContextProvider");
  return context;
}
