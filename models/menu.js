// models/menu.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Menu', {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descMenu: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
