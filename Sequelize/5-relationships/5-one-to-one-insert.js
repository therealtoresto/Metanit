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

// Create coach
Coach.create({ name: 'Rob Johnson'})
    .then((coach) => {
        // Create team
        Team.create({ name: 'Chelsea' }).then((team) => {
            // set team for coach
            coach.setTeam(team).catch((err) => console.log(err));
        });
    }).catch((err) => console.log(err));
    