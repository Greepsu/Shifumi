import React from "react";

//Import styles
import "../Styles/Game.css";

//Import Contexts
import { useUserContext } from "../Contexts/UserContext";
import { useGameContext } from "../Contexts/GameContext";

//Import enums
import { ShifumiWeaponObject } from "../Enums/Shifumi";

export default function Game() {
  const { user } = useUserContext();
  const {
    score,
    userSelection,
    cpuSelection,
    userMatchResult,
    handleUserSelection,
    randomCPUSelection,
    all,
    start
  } = useGameContext();

  return (
    <div className="game-container">
      <div>{all.map(({ name, weapon }, index) => (
        <div key={index}>
          <h3>
            {name}: <span>{weapon}</span>
          </h3>
        </div>
      ))}</div>
      <div className="match-container">
        <div className="user-container">
          <span>{user}</span>
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
        <div className="opponent-container">
          <span>opponent</span>
          <span>{cpuSelection}</span>
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
