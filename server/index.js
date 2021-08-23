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

  socket.on('selection', (selection) => {
    console.log(selection)
    io.emit('selection', selection)
  })

  socket.on("disconnect", () => {
    console.log(`${socket.username} disconnected on Back`);
  });
  
});

//Listen
server.listen(5001, () => {
  console.log(`Server started: socket.io`);
});

app.listen(port, () => console.log(`Blog app listening on port ${port} !`));
