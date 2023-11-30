// cartController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller to handle form submission
const addItemToCart = async (req, res) => {
  try {
    const { item, price } = req.body;

    // Save the item to the database using Prisma
    const newItem = await prisma.cart.create({
      data: {
        item,
        price,
      },
    });

    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Controller to render chart
const renderChart = async (req, res) => {
  try {
    // Fetch all items from the cart
    const cartItems = await prisma.cart.findMany();

    // Calculate total price
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    res.status(200).json({ success: true, data: { cartItems, totalPrice } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = { addItemToCart, renderChart };
