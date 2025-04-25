// middlewares/uploadLocal.js
const multer = require('multer');

// Using memoryStorage for Cloud uploads (store files temporarily in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = upload;
