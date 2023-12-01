const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menu.controller');

router.get('/', MenuController.getAllMenu);
router.get('/:productName', MenuController.getMenuById);
router.post('/', MenuController.createMenu);
router.put('/:productName', MenuController.updateMenu);
router.delete('/:productName', MenuController.deleteMenu);

module.exports = router;