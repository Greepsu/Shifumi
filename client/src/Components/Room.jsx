import React, { useState, useEffect } from 'react';

//Import Style
import '../Styles/Room.css';

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
    },
    UnReady: {
      backgroundColor: 'transparent',
    },
  };

  if (!room) {
    return <p>loading</p>;
  }

  return room.state === 'playing' ? (
    <Game />
  ) : (
    <div className="room">
      <div className="container">
        {showId ? (
          <div className="room-id">
            <h2>Share this ID to your opponent to start playing !</h2>
            <p>{roomId}</p>
          </div>
        ) : (
          ''
        )}
        <div className="user-list">
          User in the room:{' '}
          {room
            ? room.players.map(({ username }) => (
                <div key={username}>{username}</div>
              ))
            : 'none'}
        </div>
        <span>{`User Ready: (${readyCount}/2)`}</span>
        <button
          style={ready ? buttonColor.Ready : buttonColor.UnReady}
          onClick={() => getReady()}
        >
          Play
        </button>
      </div>
    </div>
  );
}
