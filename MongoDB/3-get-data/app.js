'use strict';

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/';
const mongoClient = new MongoClient(url);

const run = async () => {
    try {
        await mongoClient.connect();
        const db = mongoClient.db('usersdb');
        const collection = db.collection('users');
        const results = await collection.find().toArray();
        const findByName = await collection.find({ name: 'Tom' }).toArray();
        const findByNameAge = await collection
            .find({ name: 'Tom', age: 28 })
            .toArray();
        const findOne = await collection.findOne({ name: 'Tom' });
        console.log(results);
        console.log(findByName);
        console.log(findByNameAge);
        console.log(findOne);
    } catch (err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);