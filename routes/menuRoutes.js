// routes/menuRoutes.js
const express = require('express');
const menuController = require('../controllers/menuController');
const router = express.Router();

router.get('/', menuController.getAllMenus);
router.get('/:id', menuController.getMenuById);
router.post('/', menuController.createMenu);
router.put('/:id', menuController.updateMenu);
router.delete('/:id', menuController.deleteMenu);

module.exports = router;
