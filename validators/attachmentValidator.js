const Joi = require('joi');

exports.attachmentSchema = Joi.object({
  courseId: Joi.string().required(),
  fileUrl: Joi.string().uri().required(),
  public_id: Joi.string().required(), // for Cloudinary delete
  filetype: Joi.string().valid('pdf', 'image', 'doc', 'video', 'other').default('other'),
});