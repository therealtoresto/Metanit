'use strict';

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'userdb',
});

connection.query('CREATE DATABASE userdb2',
    (err, res) => {
        if (err) console.log(err);
        else {
            console.log('Database is created');
            connection.end();
        }
    });

