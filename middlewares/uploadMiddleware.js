const multer = require('multer');

const storage = multer.memoryStorage(); // for cloud uploads
const upload = multer({ storage });

module.exports = upload;
