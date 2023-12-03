// controllers/menuController.js
const menuService = require('../services/menuService');

exports.getAllMenus = async (req, res, next) => {
  try {
    const menus = await menuService.getAllMenus();
    res.json(menus);
  } catch (error) {
    next(error);
  }
};

exports.getMenuById = async (req, res, next) => {
  try {
    const menu = await menuService.getMenuById(req.params.id);
    res.json(menu);
  } catch (error) {
    next(error);
  }
};

exports.createMenu = async (req, res, next) => {
  try {
    const menu = await menuService.createMenu(req.body);
    res.json(menu);
  } catch (error) {
    next(error);
  }
};

exports.updateMenu = async (req, res, next) => {
  try {
    const updatedMenu = await menuService.updateMenu(req.params.id, req.body);
    res.json(updatedMenu);
  } catch (error) {
    next(error);
  }
};

exports.deleteMenu = async (req, res, next) => {
  try {
    await menuService.deleteMenu(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
