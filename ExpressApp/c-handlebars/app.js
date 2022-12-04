'use strict';

const express = require('express');

const app = express();

app.set('view engine', 'hbs');
// set directory 'templates' for views
app.set('views', 'templates');

app.use('/contact', (_, res) => {
    res.render('contact.hbs', {
        title: 'My contacts',
        emailsVisible: true,
        emails: ['admin@mycorp.com', 'user123@mycorp.com'],
        phone: '+1234567890'
    });
});

app.use('/', (_, res) => res.send('Main page'));

app.listen(3000);
