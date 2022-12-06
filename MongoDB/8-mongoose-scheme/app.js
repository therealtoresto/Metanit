'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScheme = new Schema({
    name: {
        type: String,
        required: true,
        // default: 'NoName',
        minlength: 3,
        maxlength: 20
    },
    age: {
        type: Number,
        // default: 22,
        required: true,
        min: 1,
        max: 100
    }
},
{
    versionKey: false
});

const User = mongoose.model('User', userScheme);
const user1 = new User({ name: 'Li' });
const user2 = new User({ name: 'Tom', age: 22 });
const user3 = new User({ age: 34 });
console.dir({ user1, user2, user3 });

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/usersdb');
    // await user1.save(); //error
    await user2.save();
    console.log('Object seved:', user2);
}
main().catch(console.log).finally(async () => await mongoose.disconnect());