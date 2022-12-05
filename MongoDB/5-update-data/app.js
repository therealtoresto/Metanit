'use strict';

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/';
const mongoClient = new MongoClient(url);

const run = async () => {
    const users = [{ name: 'Bob', age: 35 },
            { name: 'Alice', age: 21 },
            { name: 'Tom', age: 45 }];
    try {
        await mongoClient.connect();
        const db = mongoClient.db('usersdb');
        const collection = db.collection('users');
        //await collection.insertMany(users);
        const findOneAndUpdate = await collection.findOneAndUpdate(
            { name: 'Alice' },
            { $set: { age: 25 }},
            { returnDocument: 'after'}
        );
        const updateMany = await collection.updateMany(
            { name: 'Bob' },
            { $set: { name: "Sam" } }
        );
        const updateOne = await collection.updateOne(
            { name: 'Tom' },
            { $set: { name: "Tomas", age: 33 } }
        );
        const result = await collection.find().toArray();
        console.log(findOneAndUpdate);
        console.log(updateMany);
        console.log(result);
    } catch (err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);