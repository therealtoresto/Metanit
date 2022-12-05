'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello test'));

app.get('/error', (req, res) => res.status(404).send('Not found'));

app.get('/user', (req, res) => res.send({ name: 'Tom', age: 22 }));

app.listen(3000);

module.exports.app = app;