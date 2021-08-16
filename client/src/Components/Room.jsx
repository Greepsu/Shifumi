import React, { useState, useEffect } from "react";

//Import style
import "../Styles/Room.css";

export default function Room() {
  const [user, setUser] = useState()
  const [message, setMessage] = useState()
  const [input, setInput] = useState('')

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     setUser(socket.id)
  //     console.log(`User with ${socket.id} ID connected`);
  //   });

  //   socket.on('message', (data) => {
  //     setMessage(data)
  //   })

  //   socket.emit("create", "room1");

  //   return socket.on("disconnect", () => {
  //     console.log(`User with ${socket.id} ID disconnected`);
  //   });
  // }, []);

  // const sendMessage = () => {
  //   socket.emit("message", input);
  // };

  return (
  <div className="room">
    <h2>{`${user}: ${message}`}</h2>
    <h3>{input}</h3>
    <input type="text" value={input} onInput={e => setInput(e.target.value)} />
    {/* <button onClick={sendMessage} >Prout</button> */}
  </div>);
}
