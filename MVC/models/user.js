'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Set schema
const userScheme = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('User', userScheme);
