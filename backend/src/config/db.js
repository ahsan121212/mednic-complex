const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mednic';
    // Set a lower timeout so it fails quickly if MongoDB is not running
    await mongoose.connect(connString, {
      serverSelectionTimeoutMS: 3000
    });
    console.log(`MongoDB Connected successfully`);
    global.dbConnected = true;
  } catch (error) {
    console.warn(`\n========================================================================`);
    console.warn(`[WARNING] MongoDB connection failed: ${error.message}`);
    console.warn(`Mednic Complex Backend will run in DEMO/MOCK mode.`);
    console.warn(`Form submissions will be logged to the console instead of saved to database.`);
    console.warn(`========================================================================\n`);
    global.dbConnected = false;
  }
};

module.exports = connectDB;
