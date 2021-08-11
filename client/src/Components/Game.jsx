import React, { useState } from 'react'

export default function Game() {
    const [userSelection, setUserSelection] = useState()
    const [cpuSelection, setCpuSelection] = useState()
    const [userMatchResult, setUserMatchResult] = useState()

    //Set CPU choice
    const randomCPUSelection = () => {
        const result = Math.floor(Math.random() * 3);
        switch (result) {
            case 0:
                setCpuSelection("Rock")
                break
            case 1:
                setCpuSelection("Paper")
                break
            case 2:
                setCpuSelection("Scissors")
                break
            default:
              console.log(`Sorry, Bot have some issues`);
        }

        matchResult()
    }

    //Set Match Result
    const matchResult = () => {
        if((userSelection === "Rock" && cpuSelection ==="Scissors") 
        || (userSelection === "Paper" && cpuSelection ==="Rock") 
        || (userSelection === "Scissors" && cpuSelection ==="Paper")) {
            setUserMatchResult("You win !")
        }else if(userSelection === cpuSelection){
            setUserMatchResult("Draw !")
        }else {
            setUserMatchResult("You loose !")
        }
    }

    console.log(`${userSelection} vs ${cpuSelection} = ${userMatchResult}`)



    return (
        <div>
            <h2>User Weapon: </h2>
            <button>Rock</button>
            <button>Paper</button>
            <button>Scissors</button>

            <h2>Cpu Weapon: </h2>

            <button>Play</button>

            <h2>Results: </h2>
        </div>
    )
}
