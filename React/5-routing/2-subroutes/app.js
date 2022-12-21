const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('indexClass.html', (err, data) => {
        res.end(data);
    })
}).listen(3000, () => console.log('Server started at 3000'));