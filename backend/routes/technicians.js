// backend/routes/technicians.js

const express = require('express');
const router = express.Router();
const Technician = require('../models/Technician');

// ✅ POST /api/technicians — Add new technician
router.post('/', async (req, res) => {
  try {
    const technician = new Technician(req.body);
    await technician.save();
    res.status(201).json(technician);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ GET /api/technicians — List all technicians
router.get('/', async (req, res) => {
  try {
    const technicians = await Technician.find();
    res.json(technicians);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
