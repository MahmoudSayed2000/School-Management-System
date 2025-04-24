const Joi = require("joi");

exports.courseSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
});
