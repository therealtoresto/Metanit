'use strict';

const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.use('/contact', (req, res) => {
    res.render('contact', {
        title: 'My contacts',
        emailsVisible: true,
        emails: ['admin@gmail.com', 'user@gmail.com'],
        phone: '+1234567890'
    });
});

app.use('/', (req, res) => {
    res.send('Main page');
});

app.listen(3000);