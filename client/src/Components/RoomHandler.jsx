import React, { useState } from 'react';

import '../Styles/RoomHandler.css';

import { useRoomContext } from '../Contexts/RoomContext';
import { useUserContext } from '../Contexts/UserContext';

//Import react-router
import { Link } from 'react-router-dom';

export default function RoomHandler() {
  const { joinRoom } = useRoomContext();
  const { user } = useUserContext();
  const [roomId, setRoomId] = useState('');

  const handleInput = (e) => setRoomId(e.target.value);

  return (
    <div className="roomhandler">
      <div className="card">
        <div className="create-room">
          <h2>Create a room</h2>
          <Link to={`/room/${user.roomId}`}>
            <button onClick={() => joinRoom(user.roomId)}>Create Room</button>
          </Link>
        </div>
        <span>OR</span>
        <div className="join-room">
          <h2>Join Room with ID</h2>
          <input value={roomId} onChange={handleInput} />
          <Link to={`/room/${roomId}`}>
            <button onClick={() => joinRoom(roomId)}>Join</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
