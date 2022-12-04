'use strict';

const express = require('express');
const expressHbs = require('express-handlebars')
const hbs = require('hbs');
const app = express();

// set settings for layout files
app.engine('hbs', expressHbs.engine({
    layoutsDir: 'views/layouts',
    defaultLayout: 'layout',
    extname: 'hbs'
}));

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