'use strict';

const express = require('express');
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

app.listen(3000, () => console.log('Server is started...'));
