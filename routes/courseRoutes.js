const express = require('express');
const router = express.Router();
const {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} = require('../controllers/courseController');

const { auth, authorizeRoles } = require('../middlewares/authMiddleware');
const { body } = require('express-validator');

// Public
router.get('/', getAllCourses);
router.get('/:id', getCourseById);

// Protected
router.post('/add-course', auth, authorizeRoles("teacher"),
    [body('title').notEmpty(),
    body('description').notEmpty(),
    body('tags').notEmpty()], createCourse);

router.put('/edit-course/:id', auth, updateCourse);

router.delete('/delete-course/:id', auth, deleteCourse);

module.exports = router;
