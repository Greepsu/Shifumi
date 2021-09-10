import React from 'react';

//Import Style
import '../Styles/Room.css';

import { useRoomContext } from '../Contexts/RoomContext';

import { useParams } from 'react-router-dom';

export default function Room() {
  const { roomId } = useParams();
  const { room, showId, getReady, disabled, userReady } = useRoomContext();

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
          {room ? room.map((id) => <div key={id}>{id}</div>) : 'none'}
        </div>
        <span>{`User Ready: (${userReady}/2)`}</span>
        <button disabled={disabled} onClick={() => getReady()}>
          Play
        </button>
      </div>
    </div>
  );
}
