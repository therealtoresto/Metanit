'use strict';

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// define routes
const userRouter = require('./routes/userRouter.js'); // for address with '/users'
const homeRouter = require('./routes/homeRouter.js');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRouter);
app.use('/', homeRouter);

// handling 404 error
app.use((req, res, next) => {
    res.status(404).send('Not found');
});

const main = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/usersdb');
        app.listen(3000, () => console.log('Server is started...'));
    } catch(err) {
        return console.log(err);
    }
}

main();

process.on('SIGINT', async () => {
    await mongoose.disconnect();
    console.log('Application closed');
    process.exit();
});


