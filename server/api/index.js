'use strict';

const Dogwater = require('dogwater');
const sailsRedisAdapter = require('sails-redis');
const routes = require('./routes');
const Hapi = require('hapi');
const apiServer = new Hapi.Server();
const conf = require('../utils/conf')();

const init = function() {

  return new Promise((resolve, reject) => {
    apiServer.connection({
      port: conf.ws.port,
      routes: {
        cors: true
      }
    });

    apiServer.register({
        register: Dogwater,
        options: {
          adapters: {
            'memory': sailsRedisAdapter
          },

          connections: {
            default: {
              adapter: 'memory'
            }
          },
          models: [{
            identity: 'job',
            connection: 'default',
            attributes: {
              identifier: 'string',
              label: 'string',
              percent: 'integer',
              active: 'boolean'
            }
          }]
        }
      },
      apiServer.start((err) => {

        if (err) {
          reject(err);
        }
        console.log('Server running at:', apiServer.info.uri);
        resolve(apiServer);
      })
    );
    routes(apiServer);
  });

};
module.exports = init;
