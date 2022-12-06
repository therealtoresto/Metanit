'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScheme = new Schema({
    name: String,
    age: Number
});

const User = mongoose.model('User', userScheme);

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/usersdb');

    //const sam = await User.create({ name: 'Sam', age: 28 }, { name: 'Sam', age: 29 });
    const tomas = await User.create({ name: 'Tomas', age: 33 }, { name: 'Tom', age: 23 });
    // console.log(user);
    // find object
    const users = await User.find({});
    const getToms = await User.find({ name: 'Tom' });
    const getOneTom = await User.findOne({ name: 'Tom' });
    const findId = '638ef0c05e261a777773a100';
    const getById = await User.findById(findId);
    console.log('Select methods:');
    console.log(users);
    console.dir({
        getToms,
        getOneTom,
        getById
    });

    // delete object
    const deleteOne = await User.deleteOne({ name: 'Tom' });
    const findOneAndDelete = await User.findOneAndDelete({ name: 'Tomas' });
    const delId = '638eea87cc4f410d42ca5c8f';
    const findByIdAndDelete = await User.findByIdAndDelete(delId);
    console.log('Delete methods:');
    console.dir({
        deleteOne,
        findOneAndDelete,
        findByIdAndDelete
    });

    // update object
    const updateOne = await User.updateOne({ name: 'Tom' }, { name: 'Tim' });
    const updateMany = await User.updateMany({ name: 'Tim' }, { name: 'Tom' });
    const id = '638e6c530158f118a532b6d0';
    const findByIdAndUpdate = await User
        .findByIdAndUpdate(id, { name: 'Kevin', age: 13 }, { new: true });
    const findOneAndUpdate = await User.findOneAndUpdate(
        { name: 'Kevin' },
        { name: 'Alex', age: 12 },
        { new: true}
    );
    console.log('Update methods:');
    console.dir({ 
        updateOne, 
        updateMany
    });
    console.log(findByIdAndUpdate);
    console.log(findOneAndUpdate);
}
main().catch(console.log).finally( async () => await mongoose.disconnect());