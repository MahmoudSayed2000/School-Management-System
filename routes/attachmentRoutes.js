const express = require('express');
const router = express.Router();
const { auth, authorizeRoles } = require('../middlewares/authMiddleware');
const uploader = require('../middlewares/fileUploader');
const CourseAttachmentController = require('../controllers/attachmentController');

router.post(
  '/upload', 
  auth,  // Ensure the user is authenticated
  authorizeRoles('admin', 'teacher'),  // OOnly specific roles
  uploader.single('file'),  // File upload middleware
  CourseAttachmentController.uploadAttachment  // Controller to handle file upload
);

module.exports = router;
