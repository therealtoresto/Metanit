'use strict';

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'userdb',
    password: 'password'
});

const sql = `DELETE FROM users WHERE name = ?`;
const data = ['Sam'];

connection.query(sql, data, (err, results) => {
        if (err) console.log(err);
        console.log(results);
        connection.end();
});
