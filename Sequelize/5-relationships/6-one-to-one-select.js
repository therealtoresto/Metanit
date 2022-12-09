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

// Get coach by id=1
Coach.findByPk(1).then((coach) => {
    if (!coach) return console.log('Coach not found');
    coach.getTeam().then((team) => {
        console.log(coach.name + ' - ' + team.name);
    });
});

Coach.findAll({
    attributes: ['name'], // include col name from table
    include: [{
        model: Team,
        attributes: ['name'] // include colname from table
    }]
}).then((coaches) => {
    for (let coach of coaches) {
        console.log(coach.name + ' - ' + coach.team.name);
    }
});
