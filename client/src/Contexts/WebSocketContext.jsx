import React, { useState, useEffect, useContext, createContext } from 'react';

//Import socket.io client
import { io } from 'socket.io-client';

export const WebSocketContext = createContext({});

export function WebSocketContextProvider({ children }) {
  const [webSocket, setWebSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:5001`);
    setWebSocket(newSocket);
    return () => newSocket.close();
  }, [setWebSocket]);
  return (
    <WebSocketContext.Provider value={webSocket}>
      {webSocket ? children : <div>Loading WebSocketContext</div>}
    </WebSocketContext.Provider>
  );
}

export function useWebSocketContext() {
  const context = useContext(WebSocketContext);
  if (!context)
    throw new Error(
      'WebSocketContext should be used within a WebSocketContextProvider'
    );
  return context;
}
