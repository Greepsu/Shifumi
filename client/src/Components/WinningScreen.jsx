import React, { useEffect } from 'react';
import '../Styles/WinningScreen.css';
import winningPicture from '../Assets/Images/undraw_winners_ao2o.svg';

import { SocketEvents } from '../Enums/Shifumi';
import { useWebSocketContext } from '../Contexts/WebSocketContext';
import { useRoomContext } from '../Contexts/RoomContext';
import { useGameContext } from '../Contexts/GameContext';

import { Link } from 'react-router-dom';

export default function WinningScreen() {
  const webSocket = useWebSocketContext();
  const { room } = useRoomContext();
  const { winner } = useGameContext();

  if (winner)
    return (
      <div className="winning-screen">
        <div className="winning-screen-card">
          <h3>
            Congratulations <span className="blue-word">{winner.username}</span>{' '}
            !
          </h3>
          <img src={winningPicture} alt="trophy with happy people" />
          <div className="btn-section">
            <Link to="/">
              <button className="btn menu-btn">Main Menu</button>
            </Link>
            {/* <Link to={`/room/${room.id}`}>
              <button className="btn replay-btn" onClick={reset}>
                New Game
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    );
}
