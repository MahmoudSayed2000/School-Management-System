const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { body } = require('express-validator');


// POST /api/auth/register
router.post('/register',[
    body('email').isEmail(),
    body('password').isLength({ min: 4 }),
    body('name').notEmpty()
  ] ,register);

// POST /api/auth/login
router.post('/login',[
    body('email').isEmail(),
    body('password').notEmpty()
  ], login);

module.exports = router;