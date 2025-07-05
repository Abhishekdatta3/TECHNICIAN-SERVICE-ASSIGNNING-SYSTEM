const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'placed' },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);  // ✅ Should use default connection
