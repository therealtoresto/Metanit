'use strict';

const http = require('http');
const fs = require('fs');

//http.createServer((req,res) => {}).listen(3000);

const ws = fs.createWriteStream('hello.txt');
ws.write('Hello!');
ws.write('Hi! \n');
ws.end('Bye!');

const rs = fs.createReadStream('hello.txt', 'utf8');
rs.on('data', (chunk) => console.log(chunk));