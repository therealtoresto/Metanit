'use strict';

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'userdb',
    password: 'password'
});

const sql = `UPDATE users SET age = ? WHERE name = ?`;
const data = [34, 'Tom'];

connection.query(sql, data, (err, results) => {
        if (err) console.log(err);
        console.log(results);
        connection.end();
});
