import React from 'react';

//Import Style
import '../Styles/Room.css';

import { useRoomContext } from '../Contexts/RoomContext';

import { useParams } from 'react-router-dom';

export default function Room() {
  const { roomId } = useParams();
  const { room, showId, getReady, readyCount, ready } = useRoomContext();

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

  return (
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
