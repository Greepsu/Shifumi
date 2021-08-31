const { Socket } = require('socket.io');
const SocketEvents = require('./SocketEvents');
const onAddUser = require('./websocket/onAddUser');

function handleSocketConnexion(socket, io) {
  function onSocket(event, callback) {
    socket.on(event, (data) => callback({ data, socket, io }));
  }

  onSocket(SocketEvents.ADD_USER, onAddUser);
  onSocket(SocketEvents.PLAYER_CHOICE, onAddUser);
  onSocket(SocketEvents.DISCONNECTED, onDisconnected);
}

module.exports = handleSocketConnexion;
