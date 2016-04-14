'use strict';

const production = (process.env.NODE_ENV === 'production');

module.exports = function() {
  return production ?
    require('../../config/production.json') :
    require('../../config/development.json');
};
