const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../utils/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'courseAttachments',
    allowed_formats: ['jpg', 'png', 'pdf', 'docx']
  }
});

module.exports = multer({ storage });
