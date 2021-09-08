import React, { useState } from 'react';

import '../Styles/RoomHandler.css';

import { useRoomContext } from '../Contexts/RoomContext';
import { useUserContext } from '../Contexts/UserContext';

export default function RoomHandler() {
  const { joinRoom, room, showId } = useRoomContext();
  const { user } = useUserContext();
  const [roomId, setRoomId] = useState('');

  console.log(roomId);

  const handleInput = (e) => setRoomId(e.target.value);

  return (
    <div className="roomhandler">
      <button onClick={() => joinRoom(user.id)}>Create Room</button>
      {showId ? (
        <div>
          <h2>Share this ID to your opponent to start playing !</h2>
          <p>{`Room ID: ${user.roomId}`}</p>
        </div>
      ) : (
        ''
      )}

      <div>
        <span>Join Room with ID</span>
        <input value={roomId} onChange={handleInput} />
        <button onClick={() => joinRoom(roomId)}>Join</button>
      </div>

      <div className="roomhandler-user">
        <div>
          User in the room:{' '}
          {room ? room.map((id) => <div key={id}>{id}</div>) : 'none'}
        </div>
      </div>
    </div>
  );
}
