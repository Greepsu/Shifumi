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

import RockPicture from '../Assets/Images/icon-rock.svg';
import PaperPicture from '../Assets/Images/icon-paper.svg';
import ScissorsPicture from '../Assets/Images/icon-scissors.svg';

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
      setReady((prev) => !prev);
      webSocket.emit(SocketEvents.SET_LOCKED, userSelection);
    }
  }

  const buttonColor = {
    ready: {
      backgroundColor: 'green',
      border: '1px solid green',
    },
    unready: {
      backgroundColor: '',
    },
  };

  return (
    <div className="game">
      <div className="score-container">
        <span>
          <span className="blue-word">Shi</span>
          <br />
          Fu
          <br />
          Mi
        </span>
        <div>
          <p>SCORE:</p>
          <span>{score}</span>
        </div>
      </div>
      <div className="match-container">
        <div className="user-container">
          <span className="username">{user.username}</span>
          <span>{userSelection}</span>
          <div className="selection user">
            <button
              className="selection-weapon selection-rock"
              onClick={() => handleUserSelection(ShifumiWeaponObject.ROCK)}
            >
              <img src={RockPicture} alt="Rock" />
            </button>
            <button
              className="selection-weapon selection-paper"
              onClick={() => handleUserSelection(ShifumiWeaponObject.PAPER)}
            >
              <img src={PaperPicture} alt="Paper" />
            </button>
            <button
              className="selection-weapon selection-scissors"
              onClick={() => handleUserSelection(ShifumiWeaponObject.SCISSORS)}
            >
              <img src={ScissorsPicture} alt="Scissors" />
            </button>
          </div>
        </div>
        <div className="match-result">
          <span>{userMatchResult}</span>
        </div>
        <div className="opponent-container">
          <span className="opponent-name">{opponent.username}</span>
          <span>{opponent.weapon}</span>
          <div className="selection opponent">
            <button
              className="selection-weapon selection-rock"
              onClick={() => handleUserSelection(ShifumiWeaponObject.ROCK)}
              disabled
            >
              <img src={RockPicture} alt="Rock" />
            </button>
            <button
              className="selection-weapon selection-paper"
              onClick={() => handleUserSelection(ShifumiWeaponObject.PAPER)}
              disabled
            >
              <img src={PaperPicture} alt="Paper" />
            </button>
            <button
              className="selection-weapon selection-scissors"
              onClick={() => handleUserSelection(ShifumiWeaponObject.SCISSORS)}
              disabled
            >
              <img src={ScissorsPicture} alt="Scissors" />
            </button>
          </div>
        </div>
      </div>
      <div className="play-container">
        <div className="button-container">
          <button
            style={ready ? buttonColor.ready : buttonColor.unready}
            onClick={weaponLocked}
          >
            Validate
          </button>
          <span>Ready: {readyCount}/2</span>
        </div>
      </div>
    </div>
  );
}
