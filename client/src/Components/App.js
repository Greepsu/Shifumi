import { useEffect, useState } from 'react'
import { io } from "socket.io-client";
import '../styles/App.css';
import Game from './Game';

function App() {

  // const socket = io("http://localhost:5001");

  // socket.on("connect", () => {
  //   console.log("User connected");
  // });

  // socket.on("disconnect", () => {
  //   console.log("User disconnected");
  // });


  return (
    <div className="App">
      <h1>App</h1>
      <Game />
    </div>
  );
}

export default App;
