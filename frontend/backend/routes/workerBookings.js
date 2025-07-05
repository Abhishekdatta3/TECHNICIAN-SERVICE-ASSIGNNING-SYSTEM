const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const WorkerBooking = require('../models/WorkerBooking');
const Technician = require('../models/Technician');

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await WorkerBooking.find().populate('technician');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Create new booking
router.post('/', async (req, res) => {
  try {
    const { technicianId, ...rest } = req.body;

    const technician = await Technician.findById(new mongoose.Types.ObjectId(technicianId));
    if (!technician) return res.status(404).json({ error: 'Technician not found' });
    if (technician.status === 'booked') return res.status(400).json({ error: 'Technician is already booked' });

    const booking = new WorkerBooking({ ...rest, technician: technician._id });
    await booking.save();

    technician.status = 'booked';
    await technician.save();

    res.status(201).json({ message: 'Booking successful!', booking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Mark booking as complete
router.put('/:id/complete', async (req, res) => {
  try {
    const booking = await WorkerBooking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    booking.status = 'completed';
    await booking.save();

    const technician = await Technician.findById(booking.technician);
    if (technician) {
      technician.status = 'available';
      await technician.save();
    }

    res.json({ message: 'Booking marked as completed' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark booking as completed' });
  }
});

module.exports = router;
