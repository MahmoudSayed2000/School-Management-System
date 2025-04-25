const upload = require('../middlewares/uploadCloud');

router.post(
  '/upload',
  authMiddleware,
  upload.single('file'),
  (req, res) => {
    res.json({ message: 'File uploaded to Cloudinary', file: req.file });
  }
);