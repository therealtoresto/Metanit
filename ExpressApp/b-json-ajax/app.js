'use strict';

const express = require('express');

const app = express();
// creating json parser
const jsonParser = express.json();

app.post('/user', jsonParser, (req, res) => {
    console.log(req.body);
    if (!req.body) return res.sendStatus(400);
    // send json to client
    res.json(req.body);
});


app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(3000);
