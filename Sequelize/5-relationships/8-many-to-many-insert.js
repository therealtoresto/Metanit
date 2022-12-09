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

Course.create({ name: 'JavaScript' });
Course.create({ name: 'TypeScript' });
Course.create({ name: 'Node.js' });

Student.create({ name: 'Tom' });
Student.create({ name: 'Bob' });
Student.create({ name: 'Alice' });

// Student.findOne({ where: { name: 'Bob' }})
//     .then((student) => {
//         if (!student) return;

//         Course.findOne({ where: { name: 'TypeScript'}})
//             .then((course) => {
//                 if (!course) return;
//                 student.addCourse(course, { through: { grade: 5}});
//             })
//     });
    