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

// DELETE
User.destroy({
    where: {
        name: 'Tom'
    }
}).then((res) => {
    console.log(res);
}).catch((err) => console.log(err));
