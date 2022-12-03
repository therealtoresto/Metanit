'use strict';

const express = require('express');
const app = express();

// use, get, post, put, delete
app.get('/about', (req, res) => res.send('<h1>About us</h1>'));
app.use('/contact', (req, res) => res.send('<h1>Contacts</h1>'));
app.get('/', (req, res) => res.send('<h1>Main page</h1>'));

// substitution symbols
app.get('/bo?k', (req, res) => res.send(req.url));
app.get('/bo+k', (req, res) => res.send(req.url)); 
app.get('/bo*k', (req, res) => res.send(req.url)); 
app.get('/book(.html)?', (req, res) => res.send(req.url));
app.get(/.*(\.)html$/, (req, res) => res.send(req.url)); 
app.listen(3000);