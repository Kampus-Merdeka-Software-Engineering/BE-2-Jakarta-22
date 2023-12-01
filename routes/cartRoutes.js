const express = require('express');
const router = express.Router();
const { Cart } = require('../models/cart');

router.post('/add-chart', (req, res) => {
    const cart = new Cart();
    const { name, price } = req.body;

    cart.addChart(name, price);

    res.json({ cart });
});

router.post('/update-chart', (req, res) => {
    const cart = new Cart();
    const { index, newName, newPrice } = req.body;

    cart.updateChart(index, newName, newPrice);

    res.json({ cart });
});

module.exports = router;