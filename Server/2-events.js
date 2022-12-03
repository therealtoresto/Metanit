'use strict';

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {

  if (req.url === '/user') {
    let data = '';
    req.on('data', (chunk) => data += chunk);
    req.on('end', () => {
      console.log(data);
      res.end('Data received');
    });
  } else fs.readFile('index.html', (err, data) => res.end(data));
 
}).listen(4000, () => console.log('Server started at 4000'));