'use strict';

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'userdb',
    password: 'password'
});

//connection.connect(); // don't needs

connection.query('SELECT * FROM users',
    (err, results, fields) => {
        if (err) console.log(err);
        console.log(results); // data
       // console.log(fields); // fields meta-data
});

const user = ['Tom', 29];
const sql = 'INSERT INTO users(name, age) VALUES(?, ?)';
connection.query(sql, user, (err, result) => {
    if (err) console.log(err);
    else console.log('Data is updated');
});

connection.execute('SELECT * FROM users',
    (err, results, fields) => {
        if (err) console.log(err);
        console.log('It is the same');
        console.log(results); // data
});

connection.end();
