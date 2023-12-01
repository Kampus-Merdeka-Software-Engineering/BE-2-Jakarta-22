module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define('Menu', {
       productName: {
         type: DataTypes.STRING,
         allowNull: false,
         primaryKey: true
       },
       productPrice: {
         type: DataTypes.DECIMAL(10, 2),
         allowNull: false
       },
       image: {
         type: DataTypes.STRING,
         allowNull: false
       },
       descMenu: {
         type: DataTypes.STRING,
         allowNull: false
       }
    }, {
       sequelize,
       modelName: 'Menu',
    });
    return Menu;
};
