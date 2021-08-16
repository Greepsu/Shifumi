import React from "react";

//Import styles
import "../Styles/Game.css";

//Import Contexts
import { useGameContext } from "../Contexts/GameContext";

//Import enums
import { ShifumiWeaponObject } from "../Enums/Shifumi";

export default function Game() {
  const {
    score,
    userSelection,
    cpuSelection,
    userMatchResult,
    handleUserSelection,
    randomCPUSelection,
  } = useGameContext();

  return (
    <div className="game-container">
      <div className="match-container">
        <div className="user-container">
          <span>User</span>
          <span>{userSelection}</span>
          <div className="user-selection">
            <div
              className="selection-rock"
              onClick={() => handleUserSelection(ShifumiWeaponObject.ROCK)}
            >
              <span>Rock</span>
            </div>
            <div
              className="selection-paper"
              onClick={() => handleUserSelection(ShifumiWeaponObject.PAPER)}
            >
              <span>Paper</span>
            </div>
            <div
              className="selection-scissors"
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
        <div className="cpu-container">
          <span>CPU</span>
          <span>{cpuSelection}</span>
          <div></div>
        </div>
      </div>
      <div className="play-container">
        <div onClick={randomCPUSelection}>
          <span>Play !</span>
        </div>
      </div>
    </div>
  );
}
