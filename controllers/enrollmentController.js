const Enrollment = require('../models/Enrollment');

exports.createEnrollment = async (req, res) => {
  try {
    const { courseId } = req.body;
    const studentId = req.user.userId;

    const enrollment = await Enrollment.create({ courseId, studentId });
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllEnrollments = async (req, res) => {
  const enrollments = await Enrollment.find()
    .populate('courseId', 'title')
    .populate('studentId', 'name email');
  res.json(enrollments);
};

exports.getMyEnrollments = async (req, res) => {
  const myEnrollments = await Enrollment.find({ studentId: req.user.userId })
    .populate('courseId', 'title');
  res.json(myEnrollments);
};

exports.updateEnrollmentStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const enrollment = await Enrollment.findByIdAndUpdate(id, { status }, { new: true });
    res.json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEnrollment = async (req, res) => {
  try {
    await Enrollment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Enrollment canceled' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
