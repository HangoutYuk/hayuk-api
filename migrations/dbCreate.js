const config = require('../config/config')
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
  });

// manually create databases needed and models because sequelize migrations is sucks and hard to use, i should've used Prisma ORM instead
connection.query(
    `CREATE DATABASE IF NOT EXISTS ${config.db.name}`,
    function (err, results) {
      console.log(results);
      console.log(err);
    }
)


const { User, poll_list_table, poll_data_table } = require('../models/models')
const tableCreate = async function (User, pollList, pollData) {
    await User.sync().then(() => {
        console.log('Users table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });

    await pollList.sync().then(() => {
        console.log('POll list table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });

    await pollData.sync().then(() => {
        console.log('Poll data table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

tableCreate(User, poll_list_table, poll_data_table)