// models/Donation.js
module.exports = (sequelize, DataTypes) => {
    const Donation = sequelize.define('Donation', {
       name: DataTypes.STRING,
       amount: DataTypes.INTEGER,
       date: DataTypes.DATE
    });
   
    return Donation;
   };