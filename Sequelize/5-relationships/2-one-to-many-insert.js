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

Company.create({ name: 'Apple' }).then((res) => {
    // get id created company
    const compId = res.id;
    // create some products for that company
    Product.create({ name: 'iPhone XS', price: 400, companyId: compId })
        .catch((err) => console.log(err));
    Product.create({ name: 'iPhone XR', price: 350, companyId: compId })
        .catch((err) => console.log(err));
}).catch((err) => console.log(err));

// // Other way
Company.findByPk(1).then((company) => {
    if (!company) return console.log('Company not found');
    console.log(company);
    // add one object
    company.createProduct({ name: 'iPhone X', price: 300,})
        .catch((err) => console.log(err));
}).catch((err) => console.log(err));
