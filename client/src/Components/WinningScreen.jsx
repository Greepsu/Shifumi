import React from 'react';
import '../Styles/WinningScreen.css';
import { useRoomContext } from '../Contexts/RoomContext';
import { useGameContext } from '../Contexts/GameContext';
import { Link } from 'react-router-dom';

export default function WinningScreen() {
  const { room } = useRoomContext();
  const { winner } = useGameContext();
  return (
    <div className="winning-screen">
      <div className="winning-screen-card">
        <h3>Congratulations {winner} !</h3>
        <div className="btn-section">
          <Link to="/">
            <button className="btn menu-btn">Main Menu</button>
          </Link>
          <Link to={`/room/${room.id}`}>
            <button className="btn replay-btn">New Game</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
