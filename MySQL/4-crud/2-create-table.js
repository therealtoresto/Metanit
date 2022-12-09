'use strict';

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'userdb',
});

const sql = `CREATE TABLE IF NOT EXISTS users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL
)`;

connection.query(sql, (err, res) => {
    if (err) console.log(err);
    else {
        console.log('Table is created');
        connection.end();
    }
});


