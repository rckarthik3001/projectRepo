const Student = require('../models/studentModel.js');
const Jobs = require('../models/jobModel.js');

// Register a new student
const registerStudent = async (req, res) => {
  const { name, email, password, rollNumber, department, year } = req.body;

  try {
    const student = new Student({
      name,
      email,
      password,
      rollNumber,
      department,
      year
    });
    await student.save();
    res.status(201).json({ message: 'Student registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error registering student' ,err});
  }
};

//get student profile information
const getProfile = async(req,res) => {
  try {
    const student = await  Student.findById(req.userId);
    if(student){
      res.status(200).json(student);
    }else{
      res.status(404).json({message: 'Student not found'});
    }
  }
  catch(err){
    res.status(403).json({message : 'Access Denied'});
  }
}


//update student profile information
const updateProfile = async(req,res) =>{
  try{
    const student = await Student.findById(req.userId);
    if(student){
      student.personalInfo = req.body.personalInfo;
      await  student.save();
      res.status(200).json({message  : 'Profile updated Successfully'});
    }else{
      res.status(404).json({message: 'Student not found'});
    }
  }
  catch(err){
    res.status(403).json({message : 'Access Denied'});
  }

  }
//get all jobs

const getAllJobs = async (req,res) => {
  try{
    const jobs = await Jobs.find();
    res.status(200).json(jobs);
  }catch(err){
    res.status(500).json({error : 'Error fetching jobs'});
  }
}

//apply to a job
const applyJob = async (req,res) => {
  try{
    const job = await Jobs.findById(req.params.jobid);
    if(job){
      const student = await Student.findById(req.userId);
      if(student){
        if(student.myJobs.includes(job.id)){
          res.status(400).json({message : 'You have already applied to this job'});
        }else{
          job.applicants.push(student.id);
          student.myJobs.push(job.id);
          await job.save();
          await student.save();
          res.status(200).json({message : 'Job applied successfully'});
        }
      }
    }
  }
  catch(err){
    res.status(500).json({error : 'Error applying to job'});
  }
}

const getMyJobs = async (req,res) => {
  try{
    const student = await Student.findById(req.userId);
    if(student){
      let jobs = [];
      for (const id of student.myJobs) {
        const job = await Jobs.findById(id);  
        if (job) {
          jobs.push({
            title: job.title,
            company: job.company
          });
        }
      res.send(jobs);
    }
    }
  }catch(err){
    res.status(500).json({error : 'Error fetching jobs'});
  }
  
}


const uploadDoc=(req,res,next) =>{
  console.log("Uploaded successfully :",req.file)
  next()
}

module.exports = { registerStudent,getProfile,updateProfile,getAllJobs ,applyJob,getMyJobs,uploadDoc};
