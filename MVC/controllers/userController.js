'use strict';

const User = require('../models/user.js');

exports.addUser = (req, res) => {
    res.render('create.hbs');
};

exports.getUsers = async (req, res) => {
    const allUsers = await User.find({});
    res.render('users.hbs', {
        users: allUsers
    });
};
exports.postUser = async (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const userName = req.body.name;
    const userAge = req.body.age;
    const user = new User({name: userName, age: userAge});
    
    await user.save();
    res.redirect('/users');
};
