'use strict';

const fs = require('fs');
const zlib = require('zlib');

const rs = fs.createReadStream('hello.txt', 'utf8');
const ws = fs.createWriteStream('some.txt');
const ws2 = fs.createWriteStream('hello.txt.gz');

// rs.on('data', (chunk) => ws.write(chunk));
rs.pipe(ws);

const gzip = zlib.createGzip();
rs.pipe(gzip).pipe(ws);