'use strict';

import http from 'http';
import fs  from 'fs';

http.createServer((req, res) => {
    let filePath = req.url.substring(1);
    if (filePath == '') filePath = 'index.html';
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('Resource not found');
        } else {
            if (filePath.endsWith('.js')) {
                res.setHeader('Content-Type', 'text/javascript');
            }
            res.end(data);
        }
    });
}).listen(3000, () => console.log('Server started'));