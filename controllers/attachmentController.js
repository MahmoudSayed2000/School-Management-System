const CourseAttachment = require('../models/CourseAttachment');
const cloudinary = require('../utils/cloudinary'); 
const fs = require('fs');

const Joi = require('joi');
const schema = Joi.object({
  courseId: Joi.string().required(),
});

uploadAttachment = async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  if (!req.file) return res.status(400).json({ message: 'File is required' });

  try {
    const cloudinaryResult = await cloudinary.uploader.upload(req.file.path, {
      folder: 'courseAttachments',
      allowed_formats: ['jpg', 'png', 'pdf', 'docx'],
    });

    fs.unlinkSync(req.file.path); // Optionally remove the local file

    const filetype = req.file.mimetype.includes('image') ? 'image' : 'other';

    const attachment = new CourseAttachment({
      courseId: req.body.courseId,
      file: cloudinaryResult.secure_url, // Cloudinary URL
      public_id: cloudinaryResult.public_id, // Cloudinary public ID
      filetype: filetype,
    });
    await attachment.save();

    res.status(201).json({ message: 'Attachment uploaded successfully', attachment });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: err.message });
    console.error(err)
  }
};
module.exports = {
  uploadAttachment,
};