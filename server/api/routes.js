'use strict';

const socketConnection = require('../sockets').socket;
const Boom = require('boom');

const setRoutes = function(server) {

  server.route({
    method: 'GET',
    path: '/jobs',
    handler: function(request, reply) {

      var jobModel = request.collections.job;

      reply(jobModel.find().sort('createdAt ASC'));
    }
  });

  server.route({
    method: 'POST',
    path: '/jobs',
    handler: function(request, reply) {

      var jobModel = request.collections.job;

      jobModel
        .create({
          label: request.payload.label,
          percent: request.payload.percent,
          active: true,
          failed: false
        })
        .then(function(job) {

          socketConnection.addJob(job);
          reply(job);
        })
        .catch(function(err) {

          reply(Boom.badRequest('Validation Error', err.invalidAttributes));
        });
    }
  });

  server.route({
    method: 'PUT',
    path: '/jobs/{id}',
    handler: function(request, reply) {

      let jobModel = request.collections.job;

      let percent = request.payload.percent > 100 ? 100 : request.payload.percent;

      jobModel
        .update({
          id: request.params.id
        }, {
          percent: percent,
          active: percent !== 100
        })
        .then(function(job) {

          if(job.length) {
            socketConnection.updateJob(job[0]);
            reply(job[0]);
          } else {
            reply(Boom.notFound());
          }
        })
        .catch(function(err) {

          reply(Boom.badRequest('Validation Error', err.invalidAttributes));
        });
    }
  });

  server.route({
    method: 'DELETE',
    path: '/jobs/{id}',
    handler: function(request, reply) {

      let jobModel = request.collections.job;

      jobModel
        .update({
          id: request.params.id
        }, {
          active: false,
          failed: true
        })
        .then(function(job) {

          if(job.length) {
            socketConnection.updateJob(job[0]);
            reply(job[0]);
          } else {
            reply(Boom.notFound());
          }
        });
    }
  });
};

module.exports = setRoutes;
