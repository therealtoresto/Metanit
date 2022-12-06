'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create schema
const userScheme = new Schema({
    name: String,
    age: Number
});
// create model User
const User = mongoose.model('User', userScheme);
// create object of User model
const user = new User({ name: 'Bill', age: 41 });

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/userdb');

    await user.save();
    console.log('Object saved', user);

    await mongoose.disconnect();
}

main().catch(console.log);