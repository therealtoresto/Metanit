'use strict';

const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'userdb',
    password: 'password'
}).promise();

pool.execute('SELECT * FROM users')
    .then((result) => {
        console.log(result[0]);
        pool.end();
    })
    .catch((err) => console.log(err.message));

const sql = `UPDATE users SET age = age + 1 WHERE name = ?`;
const data = ['Stan'];

pool.execute(sql, data)
    .then((result) => {
        console.log(result[0]);
        return pool.execute('SELECT * FROM users');
    })
    .then((result) => {
        console.log(result[0]);
        pool.end();
    })
    .then(() => {
        console.log('Pool closed');
    })
    .catch((err) => console.log(err.message));

    