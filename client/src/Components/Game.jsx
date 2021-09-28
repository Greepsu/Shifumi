import React, { useEffect, useState } from 'react';

//Import styles
import '../Styles/Game.css';

//Import Contexts
import { useWebSocketContext } from '../Contexts/WebSocketContext';
import { useUserContext } from '../Contexts/UserContext';
import { useGameContext } from '../Contexts/GameContext';

//Import Enums
import { ShifumiWeaponObject } from '../Enums/Shifumi';
import { SocketEvents } from '../Enums/Shifumi';

export default function Game() {
  const webSocket = useWebSocketContext();
  const { user } = useUserContext();
  const {
    score,
    userSelection,
    userMatchResult,
    handleUserSelection,
    opponent,
    readyCount,
  } = useGameContext();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    webSocket.on(SocketEvents.RESET_BUTTON, () => {
      setReady(false);
    });
  }, [webSocket]);

  function weaponLocked() {
    if (userSelection) {
      setReady(!ready);
      webSocket.emit(SocketEvents.SET_LOCKED, userSelection);
      console.log(ready);
    }
    // webSocket.emit(SocketEvents.PLAYER_CHOICE, userSelection);
  }

  const buttonColor = {
    Ready: {
      backgroundColor: 'green',
    },
    UnReady: {
      backgroundColor: 'transparent',
    },
  };

  return (
    <div className="game">
      <div className="match-container">
        <div className="user-container">
          <span>{user.username}</span>
          <span>{userSelection}</span>
          <div className="user-selection">
            <div
              className="selection-weapon selection-rock"
              onClick={() => handleUserSelection(ShifumiWeaponObject.ROCK)}
            >
              <span>Rock</span>
            </div>
            <div
              className="selection-weapon selection-paper"
              onClick={() => handleUserSelection(ShifumiWeaponObject.PAPER)}
            >
              <span>Paper</span>
            </div>
            <div
              className="selection-weapon selection-scissors"
              onClick={() => handleUserSelection(ShifumiWeaponObject.SCISSORS)}
            >
              <span>Scissors</span>
            </div>
          </div>
        </div>
        <div className="score-container">
          <span>Score: {score}</span>
          <span>Ready: {readyCount}/2</span>
          <span>{userMatchResult}</span>
        </div>
        <div className="opponent-container">
          <span>{opponent.username}</span>
          <span>{opponent.weapon}</span>
          <div></div>
        </div>
      </div>
      <div className="play-container">
        <div
          style={ready ? buttonColor.Ready : buttonColor.UnReady}
          onClick={weaponLocked}
        >
          <span>Validate</span>
        </div>
      </div>
    </div>
  );
}
