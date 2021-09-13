//Import and use express
const express = require("express");
const app = express();

const port = 5000;
const SocketEvents = require("./Enums/events");

//Import CORS
const cors = require("cors");

//Import Socket.io
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const handleSocketConnection = require("./Socket/handleSocketConnection");

//Middlewares
app.use(cors());
app.use(express.json());

//Socket.io
io.on(SocketEvents.CONNECTION, (socket) => {
  handleSocketConnection(socket, io);
});

//Listen
server.listen(5001, () => {
  console.log(`Server started: socket.io`);
});

app.listen(port, () => console.log(`Shifumi app listening on port ${port} !`));
