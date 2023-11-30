const { Sequelize } = require('sequelize');
const config = require('./config.json');

const env = process.env.NODE_ENV || 'development';
const configDatabase = process.env.MYSQL_URL

const sequelize = new Sequelize(
 configDatabase

);

module.exports = sequelize;
 