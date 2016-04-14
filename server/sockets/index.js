'use strict';

const conf = require('../utils/conf')();

let socketConnection = null;

const socket = function(socket) {
  this.socket = socket;
};

socket.prototype.setSocket = function(s) {
  this.socket = s;
};
socket.prototype.addJob = function(msg) {

  this.socket.emit('ADD_JOB', JSON.stringify(msg));
};
socket.prototype.updateJob = function(msg) {

  this.socket.emit('UPDATE_JOB', JSON.stringify(msg));
};

const socketObject = new socket();

const sockets = function(apiServer) {

  let io = require('socket.io')(apiServer.listener);

  io.set('origins', 'http://localhost:8080/');

  io.on('connection', (socket) => {
    socketObject.setSocket(socket);
  });

};

module.exports = {
  connect: sockets,
  socket: socketObject
};
