import React, { useEffect, useState } from 'react';
import JobPostingList from './jobpostinglist.js';
import JobFilter from './jobfilter.js';
import JobSearchBar from './jobSearchBar.js';
import JobSortOptions from './jobSortOptions.js';
import LoadingSpinner from './loadingSpinner.js';
import JobDetailModal from './jobDetailModel.js';
import { Link } from 'react-router-dom';
import './jobportal.css';
import axios from 'axios';

const JobPortal = () => {
    const [jobPostings, setJobPostings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({ jobType: '' });
    const [sortOrder, setSortOrder] = useState('date');
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const token=localStorage.getItem('token');

    useEffect(() => {
        const fetchJobPostings = async () => {

            try {
                const response = await axios.get(
                    'http://localhost:5050/api/admin/jobs', 
                
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `${token}`, // Ensure proper format for the token
                        }
                    }
                );
                console.log(response.json);
                setJobPostings(response.data);
            } catch (error) {
                console.error('Error fetching job postings:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobPostings();
    }, []);

    const filteredJobs = jobPostings.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
     
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Job Postings</h1>

            <div className="d-flex justify-content-between mb-4">
                <Link to="/new-job-post" className="btn btn-primary">
                    Create Job Posting
                </Link>
            </div>

            {/* Search bar for filtering job postings */}
            <div className="d-flex mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by job title, company, or location"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Display loading spinner or job table */}
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Company</th>
                                <th>Location</th>
                                <th>Job Type</th>
                                <th>Salary</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job) => (
                                    <tr key={job._id}>
                                        <td>{job.title}</td>
                                        <td>{job.company}</td>
                                        <td>{job.location}</td>
                                        <td>{job.jobType}</td>
                                        <td>{job.salary}</td>
                                        <td>
                                            <button
                                                className="btn btn-info btn-sm"
                                                onClick={() => setSelectedJob(job)}
                                            >
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No jobs found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Job Detail Modal */}
            {selectedJob && (
                <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
            )}
        </div>
    );
};

export default JobPortal;