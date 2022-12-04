'use strict';

const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use('/contact', (req, res) => {
    res.render('contact', {
        title: 'My contacts',
        email: 'admin@gmail.com',
        phone: '+1234567890'
    });
});

app.use('/', (req, res) => {
    res.render('home.hbs');
});

app.listen(3000);