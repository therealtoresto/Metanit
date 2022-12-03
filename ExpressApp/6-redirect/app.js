'use strict';

const express = require('express');
const app = express();

// redirect
app.get('/about', (req, res) => res.redirect('home'));
app.get('/index', (req, res) => res.redirect('https://google.com'));
app.get('/home', (req, res) => res.send('<h1>Home page</h1>'));

// across layers
app.get('/about/bar', (req, res) => res.redirect('home'));
app.get('/about/home', (req, res) => res.send('<h1>About home page</h1>'));

// relative /
app.get('/about/foo', (req, res) => res.redirect('/home'));

// same level
app.get('/about/foo/bar', (req, res) => res.redirect('./home')); 
app.get('/about/foo/home', (req, res) => res.send('<h1>About fhomepage</h1>'));

// a level higher
app.get('/about/bar/foo', (req, res) => res.redirect('../home')); 
app.get('/about/home/foo', (req, res) => res.redirect('.'));

// two levels higher
app.get('/about/home/bar', (req, res) => res.redirect('..'));

// regular redirect
app.get('/about/bar/home', (req, res) => res.redirect(301, '/about'))

app.listen(3000);