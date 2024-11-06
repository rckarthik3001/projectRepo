const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rollNumber: { type: String, required: true ,unique: true},
    department: { type: String, required: true },
    year: { type: String, required: true },
    section : {type : String},
    address: { type: String },
    phone: { type: String },
    bloodGroup: { type: String },
    aadharNumber : {type : String},
    cgpa : {type : Number},
    panNumber : {type : String},
    caste : {type : String},
    gender : {type :String,
    enum: ['Male', 'Female', 'Other']},
  myJobs : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Job'
  }]
});

// Hash password before saving the student
studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

studentSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;

