import React, { useState, useEffect } from 'react';

//Import Style
import '../Styles/Room.css';

import clipboard from '../Assets/Images/clipboard.svg';

import { useWebSocketContext } from '../Contexts/WebSocketContext';
import { useRoomContext } from '../Contexts/RoomContext';

import { useParams } from 'react-router-dom';
import { SocketEvents } from '../Enums/Shifumi';

import Game from '../Components/Game';

export default function Room() {
  const { roomId } = useParams();
  const webSocket = useWebSocketContext();
  const { room, showId, getReady, ready } = useRoomContext();
  const [readyCount, setReadyCount] = useState(0);

  useEffect(() => {
    webSocket.on(SocketEvents.SET_READY, (isReady) => {
      setReadyCount(isReady);
    });
  }, []);

  const buttonColor = {
    Ready: {
      backgroundColor: 'green',
      border: '1px solid transparent',
    },
    UnReady: {
      backgroundColor: '',
    },
  };

  const copy = async () => {
    await navigator.clipboard.writeText(roomId);
    alert('Text copied');
  };

  if (!room) {
    return <p>loading</p>;
  }

  if (room.state === 'playing') {
    return <Game />;
  }

  return (
    <div className="room">
      <div className="left-section">
        <h3>
          <span className="blue-word">Users</span> in the room:
        </h3>
        {room
          ? room.players.map(({ username }) => (
              <div className="player" key={username}>
                {username}
              </div>
            ))
          : 'none'}
        <p>{`User Ready: (${readyCount}/2)`}</p>
      </div>
      <div className="right-section">
        {showId ? (
          <div className="room-id">
            <h3>
              <span className="blue-word">Share</span> this ID to your opponent
              to start playing !
            </h3>
            <div className="room-id-copy">
              <p>{roomId}</p>
              <button className="copy" onClick={copy}>
                <img src={clipboard} alt="" />
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className="rules">
          <h3>How to play:</h3>
          <div className="rules-text">
            <p>
              <h4>The rules are simple:</h4>
              Rock smashes Scissors <br />
              Scissors cuts Paper <br />
              Paper covers Rock
            </p>
          </div>
        </div>
        <button
          className="start-btn"
          style={ready ? buttonColor.Ready : buttonColor.UnReady}
          onClick={() => getReady()}
        >
          Play
        </button>
      </div>
    </div>
  );
}
