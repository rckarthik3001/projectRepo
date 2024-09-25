//student routes
const express = require('express');
const { registerStudent,getProfile,getAllJobs,getMyJobs,getStatus,updateProfile,applyJob } = require('../controllers/studentController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const {loginStudent} = require('../controllers/authController.js')
const router = express.Router();


router.post('/register', registerStudent);
router.get('/profile/',authMiddleware('student'),getProfile);
router.post('/login',loginStudent);
router.put('/update-profile',authMiddleware('student'),updateProfile);
router.get('/jobs',getAllJobs);
router.get('/myJobs',authMiddleware('student'),getMyJobs);
router.post('/job-apply/:jobid',authMiddleware('student'),applyJob);

module.exports = router;



