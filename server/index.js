//Import and use express
const express = require("express");
const app = express();

const port = 5000;

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

//Middlewares
app.use(cors());
app.use(express.json());

//Socket.io
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on('create', (room) => {
    console.log(`Socket ${socket.id} joining ${room}`);
    socket.join(room);
  });
  
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

//Listen
server.listen(5001, () => {
  console.log(`Server started: socket.io`);
});

app.listen(port, () => console.log(`Blog app listening on port ${port} !`));
