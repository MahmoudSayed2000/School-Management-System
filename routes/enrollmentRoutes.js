const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');
const { body } = require('express-validator');
// You can add an auth middleware if needed
const { auth, authorizeRoles } = require('../middlewares/authMiddleware');

router.post('/enroll', auth, authorizeRoles("student"), [
    body('studentId').notEmpty(),
    body('courseId').notEmpty(),
    body('status').isIn(['enrolled', 'completed', 'dropped']).optional().default('enrolled'),
], enrollmentController.createEnrollment);

router.get('/getall', auth, authorizeRoles('admin'), enrollmentController.getAllEnrollments);

router.get('/me', auth, authorizeRoles('student'), enrollmentController.getMyEnrollments);
router.put('/update-status/:id', auth, authorizeRoles('student', 'admin'), enrollmentController.updateEnrollmentStatus);
router.delete('/unenroll/:id', auth, authorizeRoles('student', 'admin'), enrollmentController.deleteEnrollment);

module.exports = router;
