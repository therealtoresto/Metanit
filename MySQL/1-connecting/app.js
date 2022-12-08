'use strict';

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'user',
    database: 'userdb',
    password: ''
});

connection.connect((err) => {
    if (err) return console.error('Error: ' + err.message);
    else console.log('Connecting to MySQL server successful');
});

connection.end((err) => {
    if (err) return console.log('Error: ' + err.message);
    console.log('Connection closed');
});
// connection.destroy(); // hard close
