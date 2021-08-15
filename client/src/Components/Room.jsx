import React from "react";

import { io } from "socket.io-client";

export default function Room() {
  const socket = io("http://localhost:5001");

  socket.on("connect", () => {
    console.log("User connected");
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
  return <div></div>;
}
