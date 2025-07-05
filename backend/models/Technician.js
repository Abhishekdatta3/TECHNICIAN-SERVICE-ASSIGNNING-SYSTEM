const mongoose = require('mongoose');

const technicianSchema = new mongoose.Schema({
  name: String,
  expertise: String,
  experience: Number, // years of experience
  location: String,   // city or area
  rating: Number,     // average user rating
  status: {
    type: String,
    enum: ['available', 'booked'],
    default: 'available'
  }
});

module.exports = mongoose.model('Technician', technicianSchema);
