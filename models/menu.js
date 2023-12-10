// models/menu.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Menu = sequelize.define('Menu', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
  description: DataTypes.STRING,
  image: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

module.exports =  Menu;
