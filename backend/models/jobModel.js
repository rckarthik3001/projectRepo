const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Internship'],
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    eligibilityCriteria: {
        type: String
    },
    // postedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Admin',  // Assuming job is posted by admin/placement coordinator
    // },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',  // Students applying for this job
    }],
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
