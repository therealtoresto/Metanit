'use strict';

const express = require(express);
const app = express();
const userController = require('./controllers/userController');

const userRouter = express.Router();

userRouter.use('/create', userController.addUser);
userRouter.use('/', userController.getUsers);

module.exports = userRouter;