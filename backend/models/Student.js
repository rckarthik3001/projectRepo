const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  branch: { type: String },
  section: { type: String },
  phone: { type: String },
  email: { type: String }
});

module.exports = mongoose.model('Students', StudentSchema); // Student changed to Students as Student model already there
