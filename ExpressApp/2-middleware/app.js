'use strict';

const fs = require('fs');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const data = `${hour}:${min}:${sec} 
        ${req.method}
        ${req.url}
        ${req.get('user-agent')}`;
        console.log(data);
    fs.appendFile('server.log', data + '\n', () => {});
    next();
});
app.use('/about', (req, res, next) => {
    console.log('About middleware');
    res.send('About middleware');
});
app.get('/', (req, res) => {
    console.log('Route /');
    res.send('Hello')
});

app.listen(3000);