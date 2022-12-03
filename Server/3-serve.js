'use strict';

const fs = require('fs');
const http = require('http');
http.createServer((req, res) => {
  console.log(`Requested path: ${req.url}`);
  const filePath = req.url.substr(1);
  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      res.statusCode = 404;
      res.end('Response not found!');
    } else {
      fs.createReadStream(filePath).pipe(res);
    }
});


}).listen(4000, () => console.log('Server started at 4000'));