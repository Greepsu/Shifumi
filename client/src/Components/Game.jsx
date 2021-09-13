import React from 'react';

//Import styles
import '../Styles/Game.css';

//Import Contexts
import { useUserContext } from '../Contexts/UserContext';
import { useGameContext } from '../Contexts/GameContext';

//Import Enums
import { ShifumiWeaponObject } from '../Enums/Shifumi';

export default function Game() {
  const { user } = useUserContext();

  const {
    score,
    userSelection,
    opponent,
    userMatchResult,
    handleUserSelection,
    start,
  } = useGameContext();

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
          <span>{score}</span>
          <span>{userMatchResult}</span>
        </div>
        <div className="opponent-container">
          <span>{opponent}</span>
          <span>Vide</span>
          <div></div>
        </div>
      </div>
      <div className="play-container">
        <div onClick={start}>
          <span>Play !</span>
        </div>
      </div>
    </div>
  );
}
