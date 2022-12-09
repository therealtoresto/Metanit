'use strict';

const mysql = require('mysql2');
const express = require('express');

const app = express();
const urlencodedParser = express.urlencoded({extended: false});

const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'userdb',
    password: 'password'
});

app.set('view engine', 'hbs');

// Get users list
app.get('/', (req, res) => {
    pool.query('SELECT * FROM users', (err, data) => {
        if (err) return console.log(err);
        res.render('index.hbs',{
            users: data
        });
    });
});

// Render form for creation data
app.get('/create', (req, res) => {
    res.render('create.hbs');
});

// Get sended data and add in db
app.post('/create', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const age = req.body.age;
    pool.query('INSERT INTO users (name, age) VALUES (?, ?)', [name, age],
        (err, data ) => {
            if (err) return console.log(err);
            res.redirect('/');
        });
});

// Get id edited user, get it from db and send with edit form
app.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM users WHERE id=?', [id], (err, data) => {
        if (err) return console.log(err);
        res.render('edit.hbs', {
            user: data[0]
        });
    });
});

// get edited data and send to db
app.post('/edit/:id', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const age = req.body.age;
    const id = req.params.id;
    pool.query(
        'UPDATE users SET name=?, age=? WHERE id=?', 
        [name, age, id], 
        (err, data) => {
            if (err) return console.log(err);
            res.redirect('/');
    });
});

// Get id deleted user and delete it from db
app.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM users WHERE id=?', [id], (err, data) => {
        if (err) return console.log(err);
            res.redirect('/');
    });
});

app.listen(3000, function() {
    console.log('Server is wait connection...')
});
