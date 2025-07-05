const mongoose = require('mongoose');

const ContactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true  // ✅ Automatic createdAt & updatedAt
});

module.exports = mongoose.model('ContactMessage', ContactMessageSchema);
