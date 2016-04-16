'use strict';

const SocketManager = function(socket) {

  this.socket = socket;
};

SocketManager.prototype.setSocket = function(s) {

  this.socket = s;
};

SocketManager.prototype.addJob = function(msg) {

  this.socket.emit('ADD_JOB', JSON.stringify(msg));
};

SocketManager.prototype.updateJob = function(msg) {

  this.socket.emit('UPDATE_JOB', JSON.stringify(msg));
};

const socketManager = new SocketManager();

const socketsConnect = function(apiServer) {

  let io = require('socket.io')(apiServer.listener);

  io.set('origins', 'http://localhost:8080/');

  io.on('connection', (socket) => {
    socketManager.setSocket(socket);
  });

};

module.exports = {
  connect: socketsConnect,
  socket: socketManager
};
