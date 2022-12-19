const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let filePath = '3-index.html';
    if (req.url !== '/') {
        filePath = req.url.substring(1);
    }
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('Resource not found!');
        } else {
            res.end(data);
        }
    });
}).listen(3000, () => console.log('Server started at 3000 port'));