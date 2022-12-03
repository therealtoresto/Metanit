'use strict';

const fs = require('fs');
const http = require('http');
http.createServer((req, res) => {
  console.log(`Requested path: ${req.url}`);
  const filePath = req.url.substr(1);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Response not found!');
    } else {
      res.end(data);
    }
});


}).listen(4000, () => console.log('Server started at 4000'));