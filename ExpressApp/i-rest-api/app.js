'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + '/public'));

const filePath = 'users.json';
app.get('/api/users', (req, res) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(content);
    res.send(users);
});

// get user by id
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id; //get id
    const content = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(content);
    let user = null;
    // find user in array by id
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            user = users[i];
            break;
        }
    }
    // send user
    if (user) {res.send(user);}
    else {res.status(404).send();};
});

// receiving sent data
app.post('/api/users', jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const userName = req.body.name;
    const userAge = req.body.age;
    const user = { name: userName, age: userAge };
    let data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);
    // find max id
    let id = Math.max.apply(Math, users.map((obj) => obj.id));
    // inc id
    user.id = ++id;
    // add user to array
    users.push(user);
    data = JSON.stringify(users);
    // owerwriting file with new data
    fs.writeFileSync('users.json', data);
    res.send(user);
});

// delete user by id
app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    let data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);
    let index = -1;
    // find user index in array
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        // delete user by id from array
        const user = users.splice(index, 1)[0];
        data = JSON.stringify(users);
        fs.writeFileSync('users.json', data);
        // send remote user
        res.send(user);
    } else {
        res.status(404).send();
    }
});

// user change
app.put('/api/users', jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const userId = req.body.id;
    const userName = req.body.name;
    const userAge = req.body.age;
    let data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);
    let user;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == userId) {
            user = users[i];
            break;
        }
    }
    // change data
    if (user) {
        user.age = userAge;
        user.name = userName;
        data = JSON.stringify(users);
        fs.writeFileSync('users.json', data);
        res.send(user);
    } else {
        res.status(404).send(user);
    }
});

app.listen(3000, () => console.log("Server wait connection..."))