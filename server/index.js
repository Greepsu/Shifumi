//Import and use express
const express = require('express');
const app = express();

const port = 5000;

//Import CORS
const cors = require('cors');

//Import Socket.io
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

//Middlewares
app.use(cors());
app.use(express.json());

//Socket.io
io.on('connection', (socket) => {
  console.log(`User with ${socket.id} ID connected on Back`);

  socket.on('create', (room) => {
    socket.join(room);
    console.log(`User with ${socket.id} ID joining ${room}`);
  });

  socket.on('disconnect', () => {
    console.log(`User with ${socket.id} ID disconnected on Back`);
  });

  socket.on('message', (data, room) => {
    if(room) {
      socket.broadcast.emit('message', data)
    }
  })
});

//Listen
server.listen(5001, () => {
  console.log(`Server started: socket.io`);
});

app.listen(port, () => console.log(`Blog app listening on port ${port} !`));
