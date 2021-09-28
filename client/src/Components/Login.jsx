import React, { useState } from 'react';

import '../Styles/Login.css';

//Import WebSocketContext
import { useWebSocketContext } from '../Contexts/WebSocketContext';

//Import ENUM
import { SocketEvents } from '../Enums/Shifumi';

export default function Login() {
  const webSocket = useWebSocketContext();
  const [username, setUsername] = useState('');

  const handleInput = (e) => setUsername(e.target.value);
  const handleUsername = () => webSocket.emit(SocketEvents.ADD_USER, username);

  return (
    <div className="login">
      <div>
        <h2>Enter your name !</h2>
        <input value={username} onChange={handleInput} autoFocus />
        <button onClick={handleUsername}>Login</button>
      </div>
    </div>
  );
}
