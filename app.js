const express = require('express');
const cors = require('cors');
const app = express();

const authRoute = require('./routes/authRoutes');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// Routes
app.use('/api/auth', authRoute);

// Export the app
module.exports = app;
