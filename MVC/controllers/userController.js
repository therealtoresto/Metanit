'use strict';

const User = require('../models/user.js');

exports.addUser = (req, res) => {
    res.render('create.hbs');
};

exports.getUsers = (req, res) => {
    res.render('users.hbs', {
        users: User.getAll()
    });
};
exports.postUser = (req, res) => {
    const userName = req.body.name;
    const userAge = req.body.age;
    const user = new User(userName, userAge);
    user.save();
    res.redirect('/users');
};
