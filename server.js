
require('dotenv').config({
  path: process.env.NODE_ENV !== 'production' ? '.env.local' : '.env'
});

console.log('Current NODE_ENV:', process.env.NODE_ENV);
console.log('Cloud Name:', process.env.CLOUD_NAME);
console.log('API Key:', process.env.CLOUD_API_KEY);

const app = require('./app');
const connectDB = require('./config/DB');

// Load env variables


// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.ServerPORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});