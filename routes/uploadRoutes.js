const uploader = require('../middlewares/fileUploader');
const auth = require('../middlewares/authMiddleware');

router.post(
  '/upload',
  auth,
  uploader.single('file'),
  (req, res) => {
    const fileInfo = process.env.UPLOAD_STRATEGY === 'cloud'
      ? req.file.path
      : `/uploads/${req.file.filename}`;

    res.json({ message: 'File uploaded successfully', file: fileInfo });
  }
);
