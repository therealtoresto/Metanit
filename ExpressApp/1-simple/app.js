'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('<h1>Main page</h1>'));
app.get('/about', (req, res) => res.send('<h1>About us</h1>'));
app.get('/contacts', (req, res) => res.send('<h1>Contacts</h1>'));

app.listen(3000);