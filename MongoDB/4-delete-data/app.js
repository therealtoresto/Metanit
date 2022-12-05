'use strict';

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/';
const mongoClient = new MongoClient(url);

const run = async () => {
    try {
        await mongoClient.connect();
        const db = mongoClient.db('usersdb');
        const collection = db.collection('users');
        const deleteOne = await collection.deleteOne({ name: 'Bob' });
        const deleteMany = await collection.deleteMany({ name: 'Tom' });
        const findOneAndDelete = await collection.findOneAndDelete({ age: 21 });
        const result = await collection.drop();
        console.log(deleteOne);
        console.log(deleteMany);
        console.log(findOneAndDelete);
        console.log(result);
    } catch (err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);