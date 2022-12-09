'use strict';

const Sequelize = require('sequelize');
const express = require('express');

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

const sequelize = new Sequelize('userdb', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    }
});

// define model User
const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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

app.set('view engine', 'hbs');

// sunc with db and after it start server
sequelize
    .sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server started on 3000 port');
        })
    })
    .catch((err) => console.log(err));

// GET data
app.get('/', (req, res) => {
    User.findAll({ raw: true }).then((data) => {
        res.render('index.hbs', { users: data });
    }).catch((err) => console.log(err));
});

app.get('/create', (req, res) => {
    res.render('create.hbs');
});

// CREATE data
app.post('/create', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const userName = req.body.name;
    const userAge = req.body.age;
    User.create({ name: userName, age: userAge }).then(() => {
        res.redirect('/');
    }).catch((err) => console.log(err));
});

// GET object by id for edit
app.get('/edit/:id', (req, res) => {
    const userId = req.params.id;
    User.findAll({ where: {id: userId }, raw: true })
        .then((data) => {
            res.render('edit.hbs', { user: data[0] });
        })
        .catch((err) => console.log(err));
});

// UPDATE data in db
app.post('/edit/:id', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const userName = req.body.name;
    const userAge = req.body.age;
    const userId = req.params.id;
    User.update({ name: userName, age: userAge }, { where: { id: userId } })
        .then(() => res.redirect('/'))
        .catch((err) => console.log(err));
});

// DELETE data
app.post('/delete/:id', (req, res) => {
    const userId = req.params.id;
    User.destroy({ where: {id: userId} })
        .then(() => res.redirect('/'))
        .catch((err) => console.log(err));
});