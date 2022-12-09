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

// UPDATE
User.update({ age: 36 }, {
    where: {
        name: 'Bob'
    }
})
.then(users => {
    console.log(users);
}).catch((err) => console.log(err));
