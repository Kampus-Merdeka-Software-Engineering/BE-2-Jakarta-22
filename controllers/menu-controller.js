const { Menu } = require('../models');

exports.getAllMenu = async (req, res) => {
 try {
    const menus = await Menu.findAll();
    res.status(200).json(menus);
 } catch (error) {
    res.status(500).json({ error: 'Server Error' });
 }
};

exports.getMenuById = async (req, res) => {
 try {
    const menu = await Menu.findByPk(req.params.productName);
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ error: 'Menu Not Found' });
    }
 } catch (error) {
    res.status(500).json({ error: 'Server Error' });
 }
};

exports.createMenu = async (req, res) => {
 try {
    const menu = await Menu.create(req.body);
    res.status(201).json(menu);
 } catch (error) {
    res.status(500).json({ error: 'Server Error' });
 }
};

exports.updateMenu = async (req, res) => {
 try {
    const menu = await Menu.findByPk(req.params.productName);
    if (menu) {
      await menu.update(req.body);
      res.status(200).json(menu);
    } else {
      res.status(404).json({ error: 'Menu Not Found' });
    }
 } catch (error) {
    res.status(500).json({ error: 'Server Error' });
 }
};

exports.deleteMenu = async (req, res) => {
 try {
    const menu = await Menu.findByPk(req.params.productName);
    if (menu) {
      await menu.destroy();
      res.status(200).json({ message: 'Menu Deleted Successfully' });
    } else {
      res.status(404).json({ error: 'Menu Not Found' });
    }
 } catch (error) {
    res.status(500).json({ error: 'Server Error' });
 }
};