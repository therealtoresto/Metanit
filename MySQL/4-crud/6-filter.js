'use strict';

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'userdb',
    password: 'password'
});

const sql = `SELECT * FROM users WHERE name = ? AND age = ?`;
const filter = ['Tom', 29];

connection.query(sql, filter, (err, results) => {
        if (err) console.log(err);
        console.log(results);
        connection.end();
});
