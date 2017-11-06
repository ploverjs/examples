const process = require('process');
const args    = require('minimist')(process.argv.slice(2));

const env = args.env || process.env.WEBPACK_ENV || 'dev';
process.env.WEBPACK_ENV = env;

module.exports = require('./webpack/' + env);
