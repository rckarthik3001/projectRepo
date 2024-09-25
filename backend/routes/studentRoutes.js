//student routes
const express = require('express');
const { registerStudent,getProfile,getJobs,getStatus,updateProfile,applyJob } = require('../controllers/studentController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const {loginStudent} = require('../controllers/authController.js')
const router = express.Router();

// Route for registering a student
// router.post('/register', registerStudent);
// router.get('/profile',authMiddleware('student'),getProfile);
// router.post('/login',loginStudent);
// router.put('/update-profile',authMiddleware('student'),updateProfile);
// router.get('/jobs',getJobs);
// router.post('/job-apply/:jobid',authMiddleware('student'),applyJob);
// router.get('/applications' ,authMiddleware('student'),getStatus);

module.exports = router;



