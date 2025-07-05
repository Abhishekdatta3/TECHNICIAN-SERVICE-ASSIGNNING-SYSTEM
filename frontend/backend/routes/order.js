const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Adjust path if needed

// Place a new order (user)
router.post('/place', async (req, res) => {
  try {
    const { customerName, customerEmail, product, quantity, totalPrice } = req.body;

    const newOrder = new Order({
      customerName,
      customerEmail,
      product,
      quantity,
      totalPrice,
    });

    const savedOrder = await newOrder.save();

    res.json({ success: true, order: savedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to place order' });
  }
});

// Get all orders (admin)
router.get('/admin/all', async (req, res) => {
  try {
    const allOrders = await Order.find().sort({ createdAt: -1 });
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
});

module.exports = router;
