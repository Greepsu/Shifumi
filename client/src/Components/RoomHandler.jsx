import React, { useState } from 'react';

import { useRoomContext } from '../Contexts/RoomContext';
import { useUserContext } from '../Contexts/UserContext';

export default function RoomHandler() {
  const { joinRoom } = useRoomContext();
  const { user } = useUserContext();
  const [roomId, setRoomId] = useState('');

  console.log(roomId);

  const handleInput = (e) => setRoomId(e.target.value);

  return (
    <div className="roomhandler">
      <button onClick={() => joinRoom(user.roomId)}>Create Room</button>

      <span>Join Room with ID</span>
      <input value={roomId} onChange={handleInput} />
      <button onClick={() => joinRoom(roomId)}>Join</button>
    </div>
  );
}
