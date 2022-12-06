'use strict';

const mongoose = require('mongoose');
const express = require('express');
const Schema = mongoose.Schema;
const app = express();
const jsonParser = express.json();

const userScheme = new Schema(
    { name: String, age: Number },
    { versionKey: false }
);

const User = mongoose.model('User', userScheme);

app.use(express.static(__dirname + '/public'));

const main = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/usersdb');
        app.listen(3000);
        console.log('Server is started on port: 3000');
    } catch (err) {
        return console.log(err);
    }
}

app.get('/api/users', async (req, res) => {
    const users = await User.find({});
    res.send(users);
});

app.get('/api/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) res.send(user);
    else res.sendStatus(404);
});

app.post('/api/users', jsonParser, async (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const userName = req.body.name;
    const userAge = req.body.age;
    const user = new User({ name: userName, age: userAge });
    await user.save();
    res.send(user);
});

app.delete('/api/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (user) res.send(user);
    else res.sendStatus(404);
});

app.put('/api/users', jsonParser, async (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const userName = req.body.name;
    const userAge = req.body.age;
    const newUser = { age: userAge, name: userName };
    const user = await User.findOneAndUpdate(
        { _id: id },
        newUser,
        { new: true }
    );
    if (user) res.send(user);
    else res.sendStatus(404);
});

main();

process.on('SIGINT', async () => {
    await mongoose.disconnect();
    console.log('Application closed');
    process.exit();
})