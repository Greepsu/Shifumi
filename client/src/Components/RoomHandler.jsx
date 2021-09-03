import React, { useState } from 'react';

import { useRoomContext } from '../Contexts/RoomContext';

export default function RoomHandler() {
  const { createRoom, joinRoom } = useRoomContext();
  const [roomId, setRoomId] = useState('');

  console.log(roomId);

  const handleInput = (e) => setRoomId(e.target.value);

  return (
    <div className="roomhandler">
      <button onClick={createRoom}>Create Room</button>

      <span>Join Room with ID</span>
      <input value={roomId} onChange={handleInput} />
      <button onClick={() => joinRoom(roomId)}>Join</button>
    </div>
  );
}
