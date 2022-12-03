'use strict';

const fs = require('fs');
const http = require('http');

http.createServer(async (req, res) => {

  if (req.url === '/user') {
    let buffer = [];
    for await (const chunk of req) {
      buffer.push(chunk);
    }
    const data = JSON.parse(Buffer.concat(buffer).toString());
    console.log(data);
    res.end('Data received');
  } else fs.readFile('index.html', (err, data) => res.end(data));
 
}).listen(4000, () => console.log('Server started at 4000'));