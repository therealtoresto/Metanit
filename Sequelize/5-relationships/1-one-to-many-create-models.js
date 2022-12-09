'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('store', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    }
});

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

const Company = sequelize.define('company', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: { 
        type: DataTypes.STRING,
        allowNull: false
    }
});

Company.hasMany(Product, { onDelete: 'cascade' });

sequelize.sync({ force: true }).then(() => {
    console.log('Tables have been created');
}).catch(err => console.log(err));
