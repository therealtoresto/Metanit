'use strict';

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017/';
const mongoClient = new MongoClient(url);

// client.connect().then((mongoClient) => {
//     console.log('Connection open');
//     console.log(mongoClient.options.dbName); // get name of db
//     mongoClient.close().then(() => console.log('Connection closed'))
// });

const run = async () => {
    try {
        await mongoClient.connect();
        const db = mongoClient.db('usersdb');
        const collection = db.collection('users');
        const count = await collection.countDocuments();
        const result = await db.command({ ping: 1 });
        console.log('Connected to the server');
        console.log(`In collection users ${count} document/s`);
        console.log(result);
    } catch (err) {
        console.log('Error!')
        console.log(err);
    } finally {
        await mongoClient.close();
        console.log('Connection closed');
    }
}
run().catch(console.error);