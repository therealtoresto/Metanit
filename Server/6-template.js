'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

  fs.readFile('index.html', 'utf8', (err, data) => {
    const message = 'Magic';
    const header = 'Main page';
    data = data.replace('{header}', header).replace('{message}', message);
    res.end(data);
  })
}).listen(4000);