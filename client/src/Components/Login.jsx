import React, { useState, useEffect } from 'react'

//Import Contexts
import { useUserContext } from "../Contexts/UserContext";
//Import WebSocketContext
import { useWebSocketContext } from "../Contexts/WebSocketContext";


export default function Login() {
    const webSocket = useWebSocketContext();
    const [login, setLogin] = useState('');

    const handleInput = (e) => setLogin(e.target.value)
    const handleLogin = () => webSocket.emit('add user', login);

    return (
        <div>
            <input value={login} onChange={handleInput} />
            <button onClick={handleLogin} >Login</button>
        </div>
    )
}
