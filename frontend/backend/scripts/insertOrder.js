// // backend/scripts/insertOrder.js
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Order = require('../models/Order');

// dotenv.config();

// console.log('🔍 Loaded MONGO_URI:', process.env.MONGO_URI); // Debug line

// mongoose.connect(process.env.MONGO_URI)
//   .then(async () => {
//     console.log('✅ Connected to MongoDB');

//     const newOrder = new Order({
//       customerName: 'John Doe',
//       customerEmail: 'john@example.com',
//       product: 'AC Installation',
//       quantity: 1,
//       totalPrice: 1499,
//       // status: 'placed'
//     });

//     await newOrder.save();
//     console.log('✅ Order inserted:', newOrder);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.error('❌ DB error:', err.message);
//     mongoose.disconnect();
//   });
