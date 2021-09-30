import React from 'react';

//import style
import '../Styles/MainLobby.css';
import playPicture from '../Assets/Images/undraw_select_player_64ca.svg';

//Import react-router
import { Link } from 'react-router-dom';

export default function MainLobby() {
  return (
    <div className="main-lobby">
      <div className="main-lobby-container">
        <div className="lobby-title">
          <h1>
            <span className="blue-word">Shi</span>fumi
          </h1>
          <p>A Rock Paper Scissors game !</p>
        </div>
        <img src={playPicture} alt="" />
        <div className="lobby-button-container">
          <Link to="/cpu">
            <button>Play against CPU</button>
          </Link>
          <span>or</span>
          <Link to="/user">
            <button>Play against user</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
