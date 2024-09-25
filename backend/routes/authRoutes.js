const express = require('express');
const { loginStudent, loginAdmin } = require('../controllers/authController.js');
const router = express.Router();

// Route for student login
router.post('/login/student', loginStudent);

// Route for admin login
router.post('/login/admin', loginAdmin);

module.exports = router;

