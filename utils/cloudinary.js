const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "dpfbqvfsn",
  api_key: "877551675593461",
  api_secret: "e5GGCXB7kZSrjJlxi2Rd0u8I6p0"
  // cloud_name: process.env.CLOUD_NAME,
  // api_key: process.env.CLOUD_API_KEY,
  // api_secret: process.env.CLOUD_API_SECRET
});

module.exports = cloudinary;