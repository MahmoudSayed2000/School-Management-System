const express = require('express');
const cors = require('cors');
const app = express();

const authRoute = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const attachmentRoutes = require('./routes/attachmentRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/courses', courseRoutes);
app.use('/api/attachments', attachmentRoutes);
app.use('/api/enrollments', enrollmentRoutes);

// Export the app
module.exports = app;
