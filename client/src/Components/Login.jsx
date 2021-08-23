import React, { useState } from 'react'

//Import Contexts
import { useUserContext } from "../Contexts/UserContext";
//Import WebSocketContext
import { useWebSocketContext } from "../Contexts/WebSocketContext";


export default function Login() {
    const webSocket = useWebSocketContext();
    const { setUser } = useUserContext();
    const [input, setInput] = useState('')

    const handleInput = (e) => setInput(e.target.value)
    const handleUser = () => setUser(input)

    return (
        <div>
            <input value={input} onChange={handleInput} />
            <button onClick={handleUser} >Login</button>
        </div>
    )
}
