import React from 'react'

//import style
import "../Styles/MainLobby.css"

export default function MainLobby() {
    return (
        <div className="main-lobby" >
            <div className="main-lobby-container">
                <div className="lobby-title">
                    <h1>Shifumi</h1>
                    <p>A Rocker Paper Scissors game !</p>
                </div>
                <div className="lobby-button-container">
                    <div className="play-cpu-button">
                        <span>Play against CPU</span>
                    </div>
                    <span>or</span>
                    <div className="play-online-button">
                        <span>Play against user</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
