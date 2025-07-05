const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Technician = require('./models/Technician'); // adjust path if needed

dotenv.config();

const technicians = [
  {
    _id: new mongoose.Types.ObjectId('6866945cba47544ef4de34b1'),
    name: 'Ram Roy',
    expertise: 'Computer Hardware',
    experience: 8,
    location: 'Dum Dum',
    rating: 4.7,
    status: 'available'
  },
  {
    _id: new mongoose.Types.ObjectId('6866945cba47544ef4de34b2'),
    name: 'Saym Sekhar',
    expertise: 'Plumber',
    experience: 6,
    location: 'Agarpara',
    rating: 4.7,
    status: 'available'
  },
  {
    _id: new mongoose.Types.ObjectId('6866945cba47544ef4de34b3'),
    name: 'Modhu Banerjee',
    expertise: 'Smart House',
    experience: 10,
    location: 'Sodepur',
    rating: 4.7,
    status: 'available'
  },
  {
    _id: new mongoose.Types.ObjectId('6866945cba47544ef4de34b4'),
    name: 'Amit Kumar',
    expertise: 'Computer Technician',
    experience: 6,
    location: 'Kolkata',
    rating: 4.5,
    status: 'available'
  },
  {
    _id: new mongoose.Types.ObjectId('6866945cba47544ef4de34b5'),
    name: 'Priya Singh',
    expertise: 'Mobile Repair Expert',
    experience: 4,
    location: 'Delhi',
    rating: 5.0,
    status: 'available'
  },
  {
    _id: new mongoose.Types.ObjectId('6866945cba47544ef4de34b6'),
    name: 'Ravi Verma',
    expertise: 'Network Engineer',
    experience: 7,
    location: 'Mumbai',
    rating: 4.7,
    status: 'available'
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Kavita Joshi',
    expertise: 'Smart Home Installer',
    experience: 5,
    location: 'Bengaluru',
    rating: 4.6,
    status: 'available'
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Sandeep Das',
    expertise: 'Printer Technician',
    experience: 6,
    location: 'Kolkata',
    rating: 4.2,
    status: 'available'
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Neha Sharma',
    expertise: 'Security System Installer',
    experience: 8,
    location: 'Pune',
    rating: 4.8,
    status: 'available'
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB Atlas');

    for (const tech of technicians) {
      await Technician.updateOne(
        { _id: tech._id },
        { $set: tech },
        { upsert: true }
      );
    }

    console.log('✅ Technicians inserted or updated successfully');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('❌ Error connecting to MongoDB Atlas:', err);
  });
