const { Sequelize } = require('sequelize');
const config = require('./config.json');

const env = process.env.NODE_ENV || 'development';
const configDatabase = process.env.MYSQL_URL

const sequelize = new Sequelize(
 configDatabase

);

module.exports = sequelize;

// config/database.js
//module.exports = {
  //  development: {
    //  username: process.env.DB_USERNAME || 'root',
      //password: process.env.DB_PASSWORD || 'password',
      //database: process.env.DB_NAME || 'restaurant_db',
      //host: process.env.DB_HOST || 'localhost',
      //dialect: 'mysql',
    //},
  //};
  