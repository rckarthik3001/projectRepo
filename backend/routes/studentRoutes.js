//student routes
const express = require('express');
const { registerStudent,getProfile,getAllJobs,getMyJobs,getStatus,updateProfile,applyJob,uploadDoc } = require('../controllers/studentController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const {loginStudent} = require('../controllers/authController.js')
const router = express.Router();
const multer=require('multer')
const upload=multer({dest:'/uploads'})

router.post('/register', registerStudent);
router.get('/profile/',authMiddleware('student'),getProfile);
router.post('/login',loginStudent);
router.put('/update-profile',authMiddleware('student'),updateProfile);
router.post('/upload',upload.single('stdPhoto'),uploadDoc)
router.get('/jobs',getAllJobs);
router.get('/myJobs',authMiddleware('student'),getMyJobs);
router.post('/job-apply/:jobid',authMiddleware('student'),applyJob);

module.exports = router;



