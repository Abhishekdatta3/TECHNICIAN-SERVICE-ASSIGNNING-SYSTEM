const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

// POST a contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET all messages (for admin)
router.get('/', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE a contact message by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json({ success: true, message: 'Message deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
