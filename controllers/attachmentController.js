const cloudinary = require('../utils/cloudinary');
const CourseAttachment = require('../models/CourseAttachment');

exports.uploadAttachment = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ message: 'No file uploaded' });

    const result = await cloudinary.uploader.upload_stream(
      { resource_type: 'auto', folder: 'school/courses' },
      async (error, result) => {
        if (error) return res.status(500).json({ error });

        const attachment = await CourseAttachment.create({
          courseId: req.body.courseId,
          file: result.secure_url,
          public_id: result.public_id,
          filetype: file.mimetype.split('/')[1]
        });

        res.status(201).json({ message: 'Uploaded', attachment });
      }
    );

    file.stream.pipe(result);
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};
