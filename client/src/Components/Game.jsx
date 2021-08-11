import React, { useContext, useState } from 'react';
import { GameContext } from '../Contexts/GameContext';

export default function Game() {
    const {
        score,
    userSelection,
    cpuSelection,
    userMatchResult,
    handleUserSelection,
    handleCpuSelection,
    handlePlayAgain,
      } = useContext(GameContext);
    return (
        <div>
            <h2>User Weapon: </h2>
            <button>Rock</button>
            <button>Paper</button>
            <button>Scissors</button>

            <h2>Cpu Weapon: </h2>

            <button>Play</button>

            <h2>Results: </h2>

            <h2>Score: {score}</h2>
        </div>
    )
}
