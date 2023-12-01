const { Menu } = require('../models');

exports.getAllMenu = async () => {
 try {
    const menus = await Menu.findAll();
    return menus;
 } catch (error) {
    throw new Error('Server Error');
 }
};

exports.getMenuById