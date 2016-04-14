import {EventEmitter} from 'events';
import assign from 'object-assign';
import io from 'socket.io-client';
import 'whatwg-fetch';
import config from 'Config';

var CHANGE_EVENT = 'change';

var _jobs = {};

function create(job) {
  _jobs[job.id] = job;
}

function update(job) {
  _jobs[job.id] = assign({}, _jobs[job.id], job);
}

var JobStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _jobs;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

/**
 * Initial fetching of all Jobs
 */
fetch('http://localhost:' + config.server.port + '/jobs')
  .then((response) => response.json())
  .then((res) => {

    res.forEach((j) => {
      _jobs[j.id] = j;
    });

    JobStore.emitChange();
  });

/**
 * Connect to the Socket server
 */
var socket = io('http://localhost:' + config.server.port);
socket.on('ADD_JOB', (j) => {

  var job = JSON.parse(j);

  create(job);
  JobStore.emitChange();
});
socket.on('UPDATE_JOB', (j) => {

  var job = JSON.parse(j);

  update(job);
  JobStore.emitChange();
});

export default JobStore;
