// const expressValidator = require('express-validator');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bycrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const multer = require('multer');
// const joi = require('joi');

const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/DB');
const mongoose = require('mongoose');

// Load env variables
dotenv.config();
const User = require('./models/User'); // Update path as needed

// Connect to MongoDB
// connectDB();

const testInsert = async () => {
    try {
      await connectDB();
  
      const existingUser = await User.findOne({ email: "admin@example.com" });
      if (!existingUser) {
        const newUser = new User({
          name: 'Admin',
          email: 'admin@example.com',
          password: 'hashedpassword', // use real hashed pw in production
          Role: 'admin',
        });
  
        await newUser.save();
        console.log('Test user created');
      } else {
        console.log('Test user already exists');
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  testInsert();

// Start the server
const PORT = process.env.ServerPORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});