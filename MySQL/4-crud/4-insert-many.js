'use strict';

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'userdb',
});

const users = [
    ['Bob', 22],
    ['Alice', 25],
    ['Kate', 28]
]
const sql = `INSERT INTO users(name, age) VALUES?`;

connection.query(sql, [users], (err, res) => {
    if (err) console.log(err);
    else {
        console.log(res);
        connection.end();
    }
});
