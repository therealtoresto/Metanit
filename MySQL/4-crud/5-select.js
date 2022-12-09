'use strict';

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'userdb',
    password: 'password'
});

const sql = `SELECT * FROM users`;

connection.query(sql, (err, results) => {
        if (err) console.log(err);
        console.log(results); // data
        const users = results;
        for (let user of users) console.log(user.name);
        connection.end();
});
