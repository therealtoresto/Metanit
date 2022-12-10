'use strict';

const express = require(express);
const app = express();
const userController = require('./controllers/userController');
const homeController = require('./controllers/homeController');

// define routes
const userRouter = require('./routes/userRouter'); // for address with '/users'
const homeRouter = require('./routes/homeRouter');

app.use('/users', userRouter);
app.use('/', homeRouter);

// handling 404 error
app.use((req, res, next) => {
    res.status(404).send('Not found');
});

app.listen(3000, () => console.log('Server is started...'));
