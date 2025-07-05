// routes/admin.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const WorkerBooking = require('../models/WorkerBooking');

// ✅ Auth middleware
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'yourSecretKey'); // use process.env.JWT_SECRET in production!
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

function adminOnly(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
  next();
}

// ✅ Get all bookings
router.get('/bookings', authMiddleware, adminOnly, async (req, res) => {
  try {
    const bookings = await WorkerBooking.find();
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Mark a booking as completed
router.put('/bookings/:id/complete', authMiddleware, adminOnly, async (req, res) => {
  try {
    const booking = await WorkerBooking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.status = 'completed'; // mark as free
    await booking.save();

    res.json({ message: 'Booking marked as completed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
