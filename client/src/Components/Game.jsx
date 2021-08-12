import React, { useContext } from 'react';

//Import Contexts
import { GameContext } from '../Contexts/GameContext';

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
      } = useContext(GameContext);

    return (
        <div>
            <h2>User Weapon: {userSelection} </h2>
            <button onClick={() => handleUserSelection(ShifumiWeaponObject.ROCK)} >Rock</button>
            <button onClick={() => handleUserSelection(ShifumiWeaponObject.PAPER)}>Paper</button>
            <button onClick={() => handleUserSelection(ShifumiWeaponObject.SCISSORS)}>Scissors</button>

            <h2>Cpu Weapon: {cpuSelection} </h2>

            <button onClick={randomCPUSelection}>Play</button>

            <h2>Results: {userMatchResult} </h2>

            <h2>Score: {score}</h2>

        </div>
    )
}
