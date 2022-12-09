'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('univer', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    }
});

const Student = sequelize.define('student', {
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

const Course = sequelize.define('course', {
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

// intermediate entity, that links course and student
const Enrolment = sequelize.define('enrolment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    grade: { 
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Student.belongsToMany(Course, { through: Enrolment });
Course.belongsToMany(Student, { through: Enrolment });

sequelize.sync({ force: true }).then(() => {
    console.log('Table has been created');
});
