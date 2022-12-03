'use strict';

const http = require('http');
const os = require('os');

const greeting = require('./greeting');
const greeting1 = require('./greeting');
const greeting2 = require('./greeting');
const User = require('./user');
const welcome = require('./welcome');

const userName = os.userInfo().username;

console.log(greeting.name);
console.log(`Date of request: ${greeting.currentDate}`);
console.log(greeting.getGreeting(userName));

console.log(`Hello ${greeting1.name}`);

greeting2.name = 'Bob';
console.log(`Hello ${greeting2.name}`);
console.log(`Hello ${greeting1.name}`);

const eugene = new User('Eugene', 25);
eugene.sayHi();

welcome.getMorningMessage();
welcome.getEveningMessage();

global.name = 'Eugene';
global.console.log(date);
console.log(greeting.getGreeting());

const server = http.createServer((req, res) => {
    res.end(`Hello ${userName} from Metanit!`)
});


// server.listen(3000, () => console.log('Server started on 3000 port!'));