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

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.ServerPORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});