const Admin = require("../models/adminModel");
const Jobs = require("../models/jobModel");
const Student = require("../models/studentModel");
const authenticateJwt = require("../middlewares/adminAuth");
const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();

//admin signup
const SECRET = 'cvrAdmin234';
router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    function callback(admin) {
      if (admin) {
        res.status(403).json({ message: 'Admin already exists' });
      } else {
        const obj = { username: username, password: password };
        const newAdmin = new Admin(obj);
        newAdmin.save();
        const token = authenticateJwt.generateToken(admin);
        res.json({ message: 'Admin created successfully', token });
      }
  
    }
    Admin.findOne({ username }).then(callback);
  });

  //admin login
  router.post('/login', async (req, res) => {
    const { username, password } = req.headers;
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      const token = authenticateJwt.generateToken(admin);
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  
  //create a new job
  router.post('/jobs', authenticateJwt.authenticateToken , async (req, res) => {
    const job = new Jobs(req.body);
    await job.save();
    res.json({ message: 'Job created successfully', jobId: job.id });
  });
  
  //update a job
  router.patch('/jobs/:jobId', authenticateJwt.authenticateToken, async (req, res) => {
    const job = await Jobs.findByIdAndUpdate(req.params.jobId, req.body, { new: true });
    if (job) {
      res.json({ message: 'job updated successfully' });
    } else {
      res.status(404).json({ message: 'job not found' });
    }
  });
  
//get all jobs
  router.get('/jobs', authenticateJwt.authenticateToken, async (req, res) => {
    const jobs = await Jobs.find({});
    res.json({ jobs });
});

//get a job  with its id
  router.get('/jobs/:jobId', authenticateJwt.authenticateToken, async (req, res) => {
    const job = await Jobs.findById(req.params.jobId);
    if(job){
        res.json({job});
    }else{
        res.status(404).json({message: 'Job not found'});
    }
});

module.exports = router;