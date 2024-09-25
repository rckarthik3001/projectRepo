const Admin = require('../models/adminModel.js');
const Jobs = require('../models/jobModel.js');

// Register a new admin
const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const admin = new Admin({
      name,
      email,
      password
    });
    await admin.save();
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error registering admin' });
  }
};


const viewDashBoard = async(req,res) =>{
  res.send("Welcome to Admin DashBoard");
}

  //create a new job
const createJob =  async (req, res) => {
    const job = new Jobs(req.body);
    await job.save();
    res.json({ message: 'Job created successfully', jobId: job.id });
};
  
  //update a job
  const updateJob = async (req, res) => {
    const job = await Jobs.findByIdAndUpdate(req.params.jobId, req.body, { new: true });
    if (job) {
      res.json({ message: 'job updated successfully' });
    } else {
      res.status(404).json({ message: 'job not found' });
    }
  };
  
//get all jobs
  const getAllJobs = async (req, res) => {
    const jobs = await Jobs.find({});
    res.json({ jobs });
};

//get a job  with its id
  const getJobById =  async (req, res) => {
    try{
      const jobId = req.params.jobId;
      //console.log(jobId);
      const job = await Jobs.findById(jobId);
    if(job){
        res.json({job});
    }else{
        res.status(404).json({message: 'Job not found'});
    }
    }
    catch(err){
      res.status(500).json({message: 'Error fetching job'});
      }
};
module.exports = { registerAdmin,viewDashBoard,getAllJobs,createJob,updateJob,getJobById};
