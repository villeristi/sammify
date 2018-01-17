#! /usr/bin/env node

if (process.argv.length === 2) {
  throw Error('Well Sammy-son, you must give me a script to run...');
}

if (process.argv.length > 3) {
  throw Error('One script Sammy-son, one script!');
}

require('babel-register');
var path = require('path');

require(path.resolve(__dirname, process.argv[2]));