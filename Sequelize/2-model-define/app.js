'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('userdb', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false // without field createdAt / updatedAt
    }
});

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
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

// Other syntax

// class User extends Model {}
// User.init({
//     id: {
//         type: Sequelize.INTEGER,
//         autoincrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     age: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     }
// }, {
//     sequelize,
//     modelName: 'user'
//     }
// );

sequelize.sync().then((res) => {
    console.log(res);
})
.catch((err) => console.log(err));
