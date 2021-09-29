import React, { useState } from 'react';

import '../Styles/RoomHandler.css';

import createPicture from '../Assets/Images/undraw_Create_re_57a3.svg';
import joinPicture from '../Assets/Images/undraw_Shared_workspace_re_3gsu.svg';

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
          <div className="img-header">
            <img src={createPicture} alt="" />
          </div>
          <div className="text">
            <h3>
              <span>Create</span> a room
            </h3>
            <p>
              Create a room and share your game code to start playing with your
              friends !
            </p>
            <Link to={`/room/${user.roomId}`}>
              <button onClick={() => joinRoom(user.roomId, user)}>
                Create Room
              </button>
            </Link>
          </div>
        </div>
        <span>OR</span>
        <div className="join-room">
          <div className="img-header">
            <img src={joinPicture} alt="" />
          </div>
          <div className="text">
            <h3>
              <span>Join</span> Room with ID
            </h3>
            <input value={roomId} onChange={handleInput} />
            <Link to={`/room/${roomId}`}>
              <button onClick={() => joinRoom(roomId, user)}>Join</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
