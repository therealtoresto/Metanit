'use strict';

const http = require('http');

const message = 'Hello client!';
http.createServer((req, res) => {
    console.log(message);
    res.end(message);
}).listen(3000, '127.0.0.1', () => {
    console.log('Server is running on port:3000');
})