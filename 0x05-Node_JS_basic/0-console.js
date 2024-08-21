#!/usr/bin/env node
/*
    console module
*/

const process = require('process');

const displayMessage = (strArg) => {
  process.stdout.write(strArg);
};

module.exports = displayMessage;
