import React, { useState, useEffect, useContext, createContext } from "react";

//Import Contexts
import { useWebSocketContext } from "./WebSocketContext";

export const RoomContext = createContext({});

export function RoomContextProvider({ children }) {
  const webSocket = useWebSocketContext();
  const [room, setRoom] = useState([]);
  const [opponent, setOpponent] = useState()

  useEffect(() => {
    webSocket.on("get users", (usernames) => {
      console.log(`Data: ${usernames}`);
      setRoom(usernames);
    });

    if(room.length === 2)
    setOpponent(room[0]) //A CHANGER C'EST POUR TESTER
  }, [webSocket, room]);

  const values = {room, opponent}

  return <RoomContext.Provider value={values}>{children}</RoomContext.Provider>;
}

export function useRoomContext() {
  const context = useContext(RoomContext);
  if (!context)
    throw new Error(
      "useRoomContext should be used within a RoomContextProvider"
    );
  return context;
}
