import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import "./jobportal.css";

const AddJobPost = () => {
    const [jobDetails, setJobDetails] = useState({
        title: '',
        companyName: '',
        location: '',
        jobType: '',
        salary: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobDetails({...jobDetails,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        console.log(jobDetails); // Log job details for debugging
        const token = localStorage.getItem('token'); // Get the token from localStorage
    
        if (!token) {
            console.error('No token found');
            return;
        }
    
        try {
            const response = await axios.post(
                'http://localhost:5050/api/admin/newjob', 
                jobDetails,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`, // Ensure proper format for the token
                    }
                }
            );
    
            if (response.status === 200) {
                // Reset the form after successful submission
                setJobDetails({
                    title: '',
                    companyName: '',
                    location: '',
                    jobType: '',
                    salary: '',
                    description: '',
                });
    
                // Success message or callback
                console.log('Job posted successfully');
            }
        } catch (error) {
            console.error('Error posting job:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="addjob-container">
            <h2 className="text-xl font-bold mb-4">Add New Job Post</h2>
            <form className="addjob-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="title">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={jobDetails.title}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="company">Company</label>
                    <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={jobDetails.companyName}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="location">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={jobDetails.location}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="jobType">Job Type</label>
                    <select
                        name="jobType"
                        id="jobType"
                        value={jobDetails.jobType}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                    >
                        <option value="">Select Job Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="salary">Salary(per annum) </label>
                    <input
                        type="text"
                        name="salary"
                        id="salary"
                        value={jobDetails.salary}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        value={jobDetails.description}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full border rounded-md p-2"
                    ></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white rounded-md py-2 font-semibold hover:bg-blue-700">
                    Add Job Post
                </button>
            </form>
        </div>
    );
};

export default AddJobPost;
