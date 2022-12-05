'use strict';

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/';
const mongoClient = new MongoClient(url);

const users = [{ name: 'Bob', age: 35 },
            { name: 'Alice', age: 21 },
            { name: 'Tom', age: 45 }];

const run = async () => {
    try {
        await mongoClient.connect();
        const db = mongoClient.db('usersdb');
        const collection = db.collection('users');
        const user = { name: 'Tom', age: 28 };
        // const result = await collection.insertOne(user);
        const results = await collection.insertMany(users);
        console.log(results);
        console.log(users);
    } catch (err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);