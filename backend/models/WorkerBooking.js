const mongoose = require('mongoose'); // ✅ Add this line

const workerBookingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  zipCode: String,
  service: String,
  technician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Technician'
  },
  date: String,
  time: String,
  urgency: String,
  status: {
    type: String,
    default: 'active'
  }
}, { timestamps: true });

module.exports = mongoose.model('WorkerBooking', workerBookingSchema);
