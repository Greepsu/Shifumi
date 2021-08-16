import React from "react";
import ReactDOM from "react-dom";

//Import style
import "./index.css";

//Import App
import App from "./Components/App.jsx";

//Import COntexts
import { GameContextProvider } from "../src/Contexts/GameContext";
import { UserContextProvider } from "../src/Contexts/UserContext";
import { WebSocketContextProvider } from "../src/Contexts/WebSocketContext";

ReactDOM.render(
  <React.StrictMode>
    <WebSocketContextProvider>
      <UserContextProvider>
        <GameContextProvider>
          <App />
        </GameContextProvider>
      </UserContextProvider>
    </WebSocketContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
