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

const rooms = [];
const users = [];
const connections = [];
const choices = [];

export const SocketEvents = Object.freeze({
  ADD_USER: 'add_user',
  GET_USER: 'get_users',
});

io.on('connection', (socket) => {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  socket.on(SocketEvents.ADD_USER, (data) => {
    console.log(data);

    //Define socket.username
    socket.data = { username: 'Didier', id: socket.id, roomId: socket.id };

    const room = {
      id: socket.id,
      state: 'idle',
    };

    //Emit username to the front (user state)
    socket.emit('get user', socket.username);

    //Emit username for new connection
    io.emit('connected', socket.username);

    //Push new user in the array of all users
    users.push(socket.data);

    socket.emit('get users', users);

    console.log(users);
  });

  //Launch game if 2 players are connected
  if (users.length === 2) {
    io.emit('game start');
  }

  socket.on('player choice', function (username, choice) {
    choices.push({ user: username, choice: choice });
    console.log('%s chose %s.', username, choice);

    if (choices.length == 2) {
      console.log('[socket.io] Both players have made choices.');
      io.emit(choices);
      choices = [];
    }
  });

  // socket.on('selection', (selection) => {
  //   // if (!choice1) {
  //   //   choice1 = selection
  //   // }else if (!choice2) {
  //   //   choice2 = selection
  //   // }else if(typeof choice1 === "object" && typeof choice2 === "object") {
  //   //   console.log(`First log: ${choice1.name} choose ${choice1.weapon}`)
  //   //   console.log(`Second log: ${choice2.name} choose ${choice2.weapon}`)
  //   // }

  //   // socket.broadcast.emit('selection', selection)
  // })

  socket.on('disconnect', () => {
    users.splice(users.indexOf(socket.username), 1);
    io.sockets.emit('get user', users);

    connections.splice(connections.indexOf(socket), 1);
    io.emit('disconnected', socket.username);
    console.log('Disconnected: %s sockets connected', connections.length);
  });
});

//Listen
server.listen(5001, () => {
  console.log(`Server started: socket.io`);
});

app.listen(port, () => console.log(`Shifumi app listening on port ${port} !`));
