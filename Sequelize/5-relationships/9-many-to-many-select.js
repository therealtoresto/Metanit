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

Student.findOne({ where: { name: 'Tom' }})
    .then((student) => {
        if (!student) return;
        student.getCourses()
            .then((courses) => {
                for (let course of courses) {
                    console.log(course.name);
                }
            });
    });

Student.findOne({ where: { name: 'Bob' }})
.then((student) => {
    if (!student) return console.log('err');
    student.getCourses()
        .then((courses) => {
            for (let course of courses) {
                console.log('course:', 
                    course.name, 
                    'grade:', 
                    course.enrolment.grade);
            }
        });
});