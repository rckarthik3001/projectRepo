import React, { useEffect, useState } from 'react';
import JobPostingList from './jobpostinglist.js';
import JobFilter from './jobfilter.js';
import JobSearchBar from './jobSearchBar.js';
import JobSortOptions from './jobSortOptions.js';
import LoadingSpinner from './loadingSpinner.js';
import JobDetailModal from './jobDetailModel.js';
import { Link } from 'react-router-dom';
import './jobportal.css';

const JobPortal = () => {
    const [jobPostings, setJobPostings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ jobType: '' });
    const [sortOrder, setSortOrder] = useState('date');
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const fetchJobPostings = async () => {
            try {
                const response = await fetch('/jobs');
               const data = await response.json();
                setJobPostings(data);
            } catch (error) {
                console.error('Error fetching job postings:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobPostings();
    }, []);

    return (
        <div className="job-portal-container">
            <h1 className="text-2xl text-center font-bold mb-4">Job Postings</h1>
            < div className='job-search-container'>
                <JobSearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                <JobFilter filters={filters} onFilterChange={setFilters} />
                <JobSortOptions sortOrder={sortOrder} onSortChange={setSortOrder} />
            </div>

            {loading ? (
                <LoadingSpinner />
            ) : (
                <JobPostingList jobPostings={jobPostings} onSelectJob={setSelectedJob} />
            )}

            {selectedJob && (
                <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
            )}
            <Link to='/new-job-post' className='text-center'>Create Job Posting</Link>
        </div>
    );
};

export default JobPortal;
