import React, { useState, useContext, createContext } from "react";

//Import socket.io client
import { io } from "socket.io-client";

export const WebSocketContext = createContext({});

export function WebSocketContextProvider({ children }) {
  const [webSocket, setWebSocket] = useState(io("http://localhost:5001"));
  const values = webSocket;
  return (
    <WebSocketContext.Provider value={values}>
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocketContext() {
  const context = useContext(WebSocketContext);
  if (!context)
    throw new Error(
      "WebSocketContext should be used within a WebSocketContextProvider"
    );
  return context;
}
