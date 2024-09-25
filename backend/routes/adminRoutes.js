const express = require('express');
const { registerAdmin,viewDashBoard,getAllJobs,createJob,updateJob,getJobById} = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware.js');
const {loginAdmin} = require('../controllers/authController.js')
const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login',loginAdmin);
router.get('/dashboard',authMiddleware('admin'),viewDashBoard);
router.post('/newjob',authMiddleware('admin'),createJob);
router.get('/jobs', authMiddleware('admin'),getAllJobs);
router.patch('/jobs/:jobId',authMiddleware('admin'),updateJob);
router.get('/jobs/:jobId',authMiddleware('admin'),getJobById);

module.exports = router;