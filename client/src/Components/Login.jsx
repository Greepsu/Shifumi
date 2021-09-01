import React, { useState } from 'react';

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
    <div>
      <input value={username} onChange={handleInput} />
      <button onClick={handleUsername}>Login</button>
    </div>
  );
}
