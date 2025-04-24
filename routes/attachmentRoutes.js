const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const { auth } = require('../middlewares/authMiddleware');
const { uploadAttachment } = require('../controllers/attachmentController');

router.post('/upload', auth, upload.single('file'), uploadAttachment);

module.exports = router;
