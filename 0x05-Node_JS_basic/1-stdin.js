#!/usr/bin/env node
/*
    stdin module
*/

const process = require('process');

const printStdIn = () => {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
  process.stdin.on('readable', () => {
    const input = process.stdin.read();
    if (input) process.stdout.write(`Your name is: ${input}`);
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
};

printStdIn();
