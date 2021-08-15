// import { useEffect, useState } from 'react'
// import { io } from "socket.io-client";
import "../Styles/App.css";
import Game from "./Game";
import MainLobby from "./MainLobby";
//Import react-router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // const socket = io("http://localhost:5001");

  // socket.on("connect", () => {
  //   console.log("User connected");
  // });

  // socket.on("disconnect", () => {
  //   console.log("User disconnected");
  // });

  return (
    <Router>

      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainLobby />
          </Route>
          <Route path="/cpu">
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
