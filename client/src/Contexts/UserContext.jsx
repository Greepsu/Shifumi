import React, { useState, useEffect, useContext, createContext } from "react";

//Import WebSocketContext
import { useWebSocketContext } from "./WebSocketContext";

//Import Components
import Login from "../Components/Login";
import { useHistory } from "react-router-dom";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      webSocket.on("connected", (username) => {
        console.log(`${username} joined the room`);
      });
    } else {
      history.push("/");
    }

    webSocket.on("get user", (username) => {
      setUser(username);
    });

    return webSocket.on("disconnected", (username) => {
      console.log(`${username} left the room`);
    });
  }, [webSocket, user, history]);

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
    throw new Error("UserContext should be used within a UserContextProvider");
  return context;
}
