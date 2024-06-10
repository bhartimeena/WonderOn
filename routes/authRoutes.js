const express = require('express');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');
const { register, login, getProtected } = require('../controllers/authController');

const router = express.Router();

router.post(
    '/register',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists(),
    ],
    register
);

router.post(
    '/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists(),
    ],
    login
);

router.get('/protected', authMiddleware, getProtected);

module.exports = router;
