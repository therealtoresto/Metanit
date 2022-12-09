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

// SELECT
User.findAll({raw: true}).then((users) => {
    console.log(users);
}).catch((err) => console.log(err));

// WHERE
User.findAll({ where: { name: 'Tom' }, raw: true })
.then(users => {
    console.log(users);
}).catch((err) => console.log(err));

// findByPk() / findOne()
User.findOne({ where: { name: 'Tom' }})
.then(user => {
    if (!user) return; //if not exist
    console.log(user.name, user.age);
}).catch((err) => console.log(err));