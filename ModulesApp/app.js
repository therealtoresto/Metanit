'use strict';

// express
const express = require('express');
const app = express();
const fs = require('fs');
app.get('/', (req, res) => {
  res.end('Hello from Express!');
});
//app.listen(3000);

//argv
const name = process.argv[2];
const age = process.argv[3];
console.log('name: ' + name);
console.log('age: ' + age);

//reading file
let fileContentAsync = () => fs.readFile('hello.txt', 'utf8', 
  (err, data) => {
    console.log('1: Asynchronous file reading');
    if (err) throw err;
        console.log(data);
    }
);

console.log('2: Synchronous file reading');
const fileContentSync = () => fs.readFileSync('hello.txt', 'utf8');

fileContentAsync();
console.log(fileContentSync());

// writting to the file (rewrite)
const writeFile = () => fs.writeFile('hello.txt', 'Hello world!', 
  (err) => {
    if (err) throw err;
    console.log('3: Async writing is completed. File data:');
    const data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data);
  }
);

writeFile();

// writing to the file (append)
const appendFileSync = () => fs.appendFileSync('hello.txt', 'Ho ho ho!')

const appendFile = () => fs.appendFile('hello.txt', 'Hi hi hi!', 
  (err) => {
    if (err) throw err;
    console.log('4: Async appending is completed. File data:');
    const data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data);
  }
);

appendFileSync();
appendFile();

// delede file
const delSync = () => fs.unlinkSync('hello.txt');

const delAsync = () => fs.unlink('hello.txt', (err) => {
  if (err) throw err;
  console.log('hello.txt was deleted');
});

// delSync();
// delAsync();