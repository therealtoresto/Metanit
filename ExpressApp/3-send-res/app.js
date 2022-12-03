'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('<h2>Hello</h2>'));
app.get('/user', (req, res) => res.send({id: 6, name: 'Tom'}));
app.get('/names', (req, res) => res.send(['Tom', 'Bob', 'Sam']));
app.get('/hello', (req, res) => res.send(Buffer.from('Hello Express')));
app.get('/page', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Main</title>
      <link rel="stylesheet" href="public/styles.css" type=text/css>
    </head>
    <body>
      <h1>Main page</h1>
      <p>Hello, Express!</p>
    </body>
    </html>`);
});
app.get('/static', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/static/foo/bar', (req, res) => {
    // res.sendStatus(404);
    res.status(404).send('Resource not found');
});
app.listen(3000);