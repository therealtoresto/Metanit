#### Sequelize

<b>Sequelize</b> - it`z ORM - library for Node.js applications, it compare 
tables in databases and relations between them with classes. When you use 
Sequelize we can not use SQL queries, but work with data as ordinary objects. 
Sequelize can work with many DBMS. There are: MySQL, Postgres, MariaDB, SQLite,
MS SQL Server.

Installing:
```
npm install --save sequelize
```

For connecting to db first of all you must create object <i>Sequelize</i>:
```js
const Sequelize = require('sequelize');
const sequelize = new Sequelize('usersdb', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});
```

For working with db as you want, you need specify in property <i>dialect</i>
next values:
 - mysql;
 - mariadb
 - sqlite;
 - postgres;
 - mssql.

You can specify value of <i>port</i>, default it will be '1403'.

Connecting to MySQL:
 ```
 npm install --save mysql2
 ```

Connecting to MS SQL Server:
 ```
 npm install --save tedious
 ```

Connecting to postgres:
 ```
 npm install --save pg
 ```

All other interaction with database in most cases with some exceptions is not
depends on specific DBMS. It means, that most of the code(maybe all code) we 
can use for connecting to different DBMS.