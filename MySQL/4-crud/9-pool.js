'use strict';

const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'userdb',
    password: 'password'
});

const sql = `INSERT INTO users (name, age) VALUES(?, ?)`;
const data = ['Bill', 25];

pool.query(sql, data, (err, results) => {
        if (err) console.log(err);
        console.log(results);
});

pool.query('SELECT * FROM users', (err, results) => {
    if (err) console.log(err);
    console.log(results);
    pool.end();
});