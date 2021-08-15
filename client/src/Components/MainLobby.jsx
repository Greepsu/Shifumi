import React from "react";

//import style
import "../Styles/MainLobby.css";

//import components
import Game from "../Components/Game";

//Import react-router
import { Link } from "react-router-dom";

export default function MainLobby() {
  return (
    <div className="main-lobby">
      <div className="main-lobby-container">
        <div className="lobby-title">
          <h1>Shifumi</h1>
          <p>A Rocker Paper Scissors game !</p>
        </div>
        <div className="lobby-button-container">
          <div className="play-cpu-button">
            <Link to="/cpu">
              <span>Play against CPU</span>
            </Link>
          </div>
          <span>or</span>
          <div className="play-online-button">
            <span>Play against user</span>
          </div>
        </div>
      </div>
    </div>
  );
}
