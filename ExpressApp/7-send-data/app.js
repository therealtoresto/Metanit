'use strict';

const express = require('express');

const app = express();

// send simple data
app.get('/', (req, res) => res.send('<h1>Main page</h1>'));
app.use('/about', (req, res) => {
    const id = req.query.id;
    const userName = req.query.name;
    res.send('<h1>information</h1><p>id=' + id +
        '</p><p>name=' + userName + '<p>');
});

// send array
app.use('/contacts', (req, res) => {
    const names = req.query.name;
    let resText = '<ul>';
    for (let i = 0; i < names.length; i++) {
        resText += '<li>' + names[i] + '</li>';
    }
    resText += '</ul>';
    res.send(resText);
});

// send objects
app.use('/news', (req, res) => {
    const id = req.query.user.id;
    const name = req.query.user.name;
    res.send('<h3>id:' + id + '<br>name: ' + name + '</h3>');
});

app.listen(3000);