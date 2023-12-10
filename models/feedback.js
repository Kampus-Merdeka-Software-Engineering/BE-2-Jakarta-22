// models/feedback.js
const { DataTypes } = require('sequelize');
const sequelize =require('../config/connection');
const Feedback = sequelize.define('Feedback', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: DataTypes.TEXT,
    email: DataTypes.STRING,
    category: DataTypes.STRING,
    message: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });


module.exports =  Feedback;
