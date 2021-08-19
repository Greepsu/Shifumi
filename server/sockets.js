//Import Socket.io
const io = require('socket.io')(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });

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
  
    socket.on('weapon', (data, room) => {
      console.log(data)
      if(room) {
        socket.broadcast.emit('weapon', data)
      }
    })
  });

  module.exports()