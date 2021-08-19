import React, { useState } from 'react'

//Import Contexts
import { useUserContext } from "../Contexts/UserContext";


export default function Login() {
    const { user, setUser } = useUserContext();
    const [input, setInput] = useState('')

    const handleInput = (e) => setInput(e.target.value)
    const handleUser = () => setUser(input)

    console.log(`Component LOGIN : user = ${user}`)

    return (
        <div>
            <input value={input} onChange={handleInput} />
            <button onClick={handleUser} >Login</button>
        </div>
    )
}
