//Import and use express
import express from "express";
const app = express();
import { Low, JSONFile } from "lowdb";
const port = 5000;
import { SocketEvents } from "./Enums/events.js";
import cors from "cors";

//Import Socket.io
import { Server } from "socket.io";
import { handleSocketConnection } from "./Socket/handleSocketConnection.js";

const io = new Server(5001, { cors: { origin: "*" } });

//Middlewares
app.use(cors());
app.use(express.json());

//Socket.io
io.on(SocketEvents.CONNECTION, (socket) => {
  console.log(`${socket.id} has connected`);
  handleSocketConnection(socket, io);
});

//Listen

app.listen(port, () => console.log(`Shifumi app listening on port ${port} !`));
