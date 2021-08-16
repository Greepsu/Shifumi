import React, { useEffect } from "react";

//Import style
import "../Styles/Room.css";

//Import socket.io client
import { io } from "socket.io-client";

export default function Room() {
  useEffect(() => {
    const socket = io("http://localhost:5001");

    const connectSocket = function() {
        socket.on("connect", () => {
        console.log("User connected");
        });
    }

    const disconnectSocket = function() {
        socket.on("disconnect", () => {
          console.log("User disconnected");
        });
    }

    const createRoom = () => socket.emit("create", "room1");

    console.log(socket.id)

  }, []);

  return (
    <div className="room">
      {/* <h2>{socket.id}</h2> */}
      <button>Connect</button>
      <button>Disco</button>
      <button></button>
    </div>
  );
}
