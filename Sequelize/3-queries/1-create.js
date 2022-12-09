'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('userdb', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    }
});

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

sequelize
    .sync()
    .then(result => {
        //console.log(result);
    })
    .catch((err) => console.log(err));

// CREATE
User.create({
    name: 'Tom',
    age: 35
}).then((res) => {
    console.log('Tom created');
}).catch((err) => console.log(err));

User.create({
    name: 'Bob',
    age: 24
}).then((res) => {
    const user = { id: res.id, name: res.name, age: res.age };
    console.log('Bob created');
}).catch((err) => console.log(err));
