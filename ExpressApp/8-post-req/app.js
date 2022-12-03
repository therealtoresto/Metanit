'use strict';

const express = require('express');

const app = express();

const urlEncodedParser = express.urlencoded({ extended: false });

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.post('/', urlEncodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send(`${req.body.userName} - ${req.body.userAge}`);
});

app.listen(3000, () => console.log('Server is started on port: 3000'));