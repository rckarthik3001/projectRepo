import React, { useState } from 'react';
import "./jobportal.css";
const AddJobPost = ({ onAddJob }) => {
    const [jobDetails, setJobDetails] = useState({
        title: '',
        company: '',
        location: '',
        jobType: '',
        salary: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform validation here if needed
        try {
            const response = await fetch('/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jobDetails),
            });

            if (!response.ok) {
                throw new Error('Failed to add job post');
            }

            // Reset the form after successful submission
            setJobDetails({
                title: '',
                company: '',
                location: '',
                jobType: '',
                salary: '',
                description: '',
            });
            onAddJob();
        } catch (error) {
            console.error('Error adding job post:', error);
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
                        name="company"
                        id="company"
                        value={jobDetails.company}
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
                    <input
                        type="text"
                        name="jobType"
                        id="jobType"
                        value={jobDetails.jobType}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md p-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="salary">Salary(per annum) </label>
                    <input
                        type="number"
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
