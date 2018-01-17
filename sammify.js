#! /usr/bin/env node

if (process.argv.length === 2) {
  throw Error('Well Sammy-son, you must give me a script to run...');
}

if (process.argv.length > 3) {
  throw Error('One script Sammy-son, one script!');
}

var path = require('path');
require('babel-register')({
  presets: [
    [require.resolve('babel-preset-env')]
  ]
});

require(path.resolve(process.argv[2]));