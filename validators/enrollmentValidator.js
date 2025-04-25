const Joi = require('joi');

exports.enrollmentSchema = Joi.object({
  courseId: Joi.string().required(),
  studentId: Joi.string().required(),
  status: Joi.string().valid("enrolled", "completed", "dropped").default("enrolled"),
});