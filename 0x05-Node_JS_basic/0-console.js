#!/usr/bin/env node
/*
    console module
*/

const process = require('process');

const displayMessage = (strArg) => {
  strArg = `${strArg}\n`
  process.stdout.write(strArg);
};

module.exports = displayMessage;
