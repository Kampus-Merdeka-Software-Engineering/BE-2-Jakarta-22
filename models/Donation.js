'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
 class Donation extends Model {
    static associate(models) {
      // define association here
    }
 }
 Donation.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    total_price: DataTypes.FLOAT,
 }, {
    sequelize,
    modelName: 'Donation',
 });
 return Donation;
};