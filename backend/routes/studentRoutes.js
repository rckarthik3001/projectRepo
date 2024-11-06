//student routes
const express = require('express');
const { registerStudent,getProfile,getAllJobs,getSingle,getMyJobs,getStatus,updateProfile,applyJob,uploadDoc } = require('../controllers/studentController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const {loginStudent} = require('../controllers/authController.js')
const router = express.Router();
const multer=require('multer')
const upload=multer({dest:'/uploads'})

router.post('/register', registerStudent);
router.post('/login',loginStudent);
router.get('/profile',authMiddleware('student'),getProfile);
router.put('/profile',authMiddleware('student'),updateProfile);
router.post('/upload',upload.single('stdPhoto'),uploadDoc)
router.get('/jobs',getAllJobs);
router.get('/job/:id',getSingle);
router.get('/myJobs',authMiddleware('student'),getMyJobs);
router.post('/job-apply/:jobId',authMiddleware('student'),applyJob);

module.exports = router;



