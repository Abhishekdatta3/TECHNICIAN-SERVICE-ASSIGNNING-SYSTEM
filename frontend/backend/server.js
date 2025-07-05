// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Routes
const workerBookingRoutes = require('./routes/workerBookings');
app.use('/api/worker-bookings', workerBookingRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);

const technicianRoutes = require('./routes/technicians'); // ✅ NEW
app.use('/api/technicians', technicianRoutes);           // ✅ NEW

const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

const orderRoutes = require('./routes/order'); // ✅ ADD THIS
app.use('/api/orders', orderRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
