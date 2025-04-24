const Course = require('../models/Course');
const { validationResult } = require("express-validator");
const { courseSchema } = require("../validators/courseValidator");

exports.createCourse = async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  
    const { error } = courseSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { title, description, tags } = req.body;
    const teacherId = req.user.userId; // from auth middleware

    const course = await Course.create({ title, description, tags, teacherId });

    res.status(201).json({ message: 'Course created', course });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create course', error: err.message });
  }
};

exports.getAllCourses = async (req, res) => {
    try {
      const { search , tag } = req.query;
  
      let filter = {};
  
      if (search) {
        filter.title = { $regex: search, $options: 'i' };
      }
  
      // elemMatch is used to apply the $regex on individual elements inside the tags array.
      if (tag) {
        filter.tags = { $elemMatch: { $regex: tag, $options: 'i' } };
      }
  
      const courses = await Course.find(filter).populate('teacherId', 'name');
      res.json(courses);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get courses', error: err.message });
    }
  };
  

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('teacherId', 'name');
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get course', error: err.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({ message: 'Course not found' });
    if (course.teacherId.toString() !== req.user.userId)
      return res.status(403).json({ message: 'You are not the course owner' });

    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update course', error: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    if (course.teacherId.toString() !== req.user.userId)
      return res.status(403).json({ message: 'Unauthorized' });

    await course.deleteOne();
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete course', error: err.message });
  }
};
