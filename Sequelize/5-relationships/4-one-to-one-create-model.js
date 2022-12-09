'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('game', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    }
});

const Coach = sequelize.define('coach', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

const Team = sequelize.define('team', {
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

Coach.hasOne(Team, { onDelete: 'cascade' });

sequelize.sync({ force: true }).then(() => {
    console.log('Table has been created');
});
