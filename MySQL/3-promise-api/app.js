'use strict';

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'userdb',
}).promise();

connection.query('SELECT * FROM users')
    .then((res) => {
        console.log(res[0]);
    })
    .catch((err) => console.log(err));

const sql = 'INSERT INTO users (name, age) VALUES (?, ?)';
const user = ['Stan', 19];
connection.query(sql, user)
    .then((res) => console.log(res[0]))
    .catch((err) => console.log(err));
connection.end();