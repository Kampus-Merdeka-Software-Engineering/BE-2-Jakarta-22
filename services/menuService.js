// services/menuService.js
const db = require('../models/index');

exports.getAllMenus = async () => {
  return await db.Menu.findAll();
};

exports.getMenuById = async (id) => {
  return await db.Menu.findByPk(id);
};

exports.createMenu = async (menuData) => {
  return await db.Menu.create(menuData);
};

exports.updateMenu = async (id, menuData) => {
  await db.Menu.update(menuData, {
    where: { id },
  });
  return await this.getMenuById(id);
};

exports.deleteMenu = async (id) => {
  await db.Menu.destroy({
    where: { id },
  });
};
