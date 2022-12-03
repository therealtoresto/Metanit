'use strict';

const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));
app.use('/', (req, res) => res.send('<h2>Main page</h2>'))
app.listen(3000);