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

  const createJob = async (req, res) => {
    console.log(req.body);
      try {
          // Validate if all required fields are present
          
          const { title, companyName, location, jobType, salary, description } = req.body;
          console.log(companyName,location);
  
          if (!title || !companyName || !location || !jobType || !salary || !description) {
              return res.status(400).json({ message: 'All required fields must be provided.' });
          }
  
          // Create new job instance with the data from the request body
          const job = new Jobs({
              title,
              companyName,
              location,
              jobType,
              salary,
              description,
              // eligibilityCriteria: req.body.eligibilityCriteria || '', // Optional field
              // Assuming req.body contains the admin ID who posted the job
          });
  
          // Save the job to the database
          await job.save();
  
          // Return success message with job ID
          res.status(200).json({ message: 'Job created successfully', jobId: job.id });
      } catch (error) {
          // Log the error and return a 500 status with the error message
          console.error('Error creating job:', error);
          res.status(500).json({ message: 'Server error. Please try again later.' });
      }
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
