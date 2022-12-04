'use strict';

const express = require('express');
const hbs = require('hbs');
const app = express();

hbs.registerHelper('getTime', () => {
    const myDate = new Date();
    const hour = myDate.getHours();
    let minute = myDate.getMinutes();
    let second = myDate.getSeconds();
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    return `Current time: ${hour}:${minute}:${second}`;
});

hbs.registerHelper('createStringList', (array) => {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result += `<li>${array[i]}</li>`;
    }
    return new hbs.SafeString(`<ul>${result}</ul>`);
});

app.set('view engine', 'hbs');

app.use('/', (req, res) => {
    res.render('home.hbs', {
        fruit: ['apple', 'lemon', 'banana', 'grape']
    });
});

app.listen(3000);