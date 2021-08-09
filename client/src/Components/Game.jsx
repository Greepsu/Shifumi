import React, { useState } from 'react'

export default function Game() {
    const [userSelection, setUserSelection] = useState()
    const [CPUSelection, setCPUSelection] = useState()
    const [userMatchResult, setUserMatchResult] = useState()

    const randomCPUSelection = () => {
        const result = Math.floor(Math.random() * 3);
        console.log(result)
        switch (result) {
            case 0:
                setCPUSelection("Rock")
                break
            case 1:
                setCPUSelection("Paper")
                break
            case 2:
                setCPUSelection("Scissors")
                break
            default:
              console.log(`Sorry, Bot have some issues`);
        }
    }

    const MatchResult = () => {
        if((userSelection === "Rock" && CPUSelection ==="Scissors") 
        || (userSelection === "Paper" && CPUSelection ==="Rock") 
        || (userSelection === "Scissors" && CPUSelection ==="Paper")) {
            setUserMatchResult("You win !")
        }else if(userSelection === CPUSelection){
            setUserMatchResult("Draw !")
        }else {
            setUserMatchResult("You loose !")
        }
    }



    return (
        <div>
            <h2>{userSelection}</h2>
            <button onClick={() => setUserSelection("Rock")} >Rock</button>
            <button onClick={() => setUserSelection("Paper")}>Paper</button>
            <button onClick={() => setUserSelection("Scissors")}>Scissors</button>

            <h2>{CPUSelection}</h2>

            <button onClick={randomCPUSelection} >Play</button>

            <h2>{userMatchResult}</h2>
        </div>
    )
}
