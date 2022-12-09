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

Company.findByPk(1).then((company) => {
    if (!company) return console.log('Company not found');
    company.getProducts()
        .then((res) => {
            for (let i = 0; i < res.length; i++)
                console.log(res[i].name, ' - ', company.name);
        }).catch((err) => console.log(err));
}).catch((err) => console.log(err));
