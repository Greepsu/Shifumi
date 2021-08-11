import React from 'react'

export default function Game() {
    return (
        <div>
            <h2>{userSelection}</h2>
            <button onClick={() => setUserSelection("Rock")} >Rock</button>
            <button onClick={() => setUserSelection("Paper")}>Paper</button>
            <button onClick={() => setUserSelection("Scissors")}>Scissors</button>

            <h2>{cpuSelection}</h2>

            <button onClick={randomCPUSelection}>Play</button>

            <h2>{userMatchResult}</h2>
        </div>
    )
}
