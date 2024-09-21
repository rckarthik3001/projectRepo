const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    rollNumber: {
        type: String,
        required: true,
        unique: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    CGPA: {
        type: Number,
        required: true,
    },
    skills: [String],
    resumeLink: {
        type: String,
    },
    jobsApplied: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',  
    }],
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
