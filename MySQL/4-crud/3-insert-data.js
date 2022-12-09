'use strict';

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'userdb',
});

const sql = `INSERT INTO users(name, age) VALUES ('Ben', 43)`;

connection.query(sql, (err, res) => {
    if (err) console.log(err);
    else {
        console.log(res);
        connection.end();
    }
});
