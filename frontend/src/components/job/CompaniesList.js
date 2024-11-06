// src/components/CompaniesList.js
import React from 'react';
import { useState,useEffect } from 'react';
import '../../components/job/CompanyDetail.css';
import axios from 'axios';
import CompanyCard from './jobPostingCard.js';
import { Link } from 'react-router-dom';


const CompaniesList = () => {
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from the backend
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/student/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs', error);
      }
    };

    fetchJobs();
  }, []);
  console.log("jobs -> ",jobs);
  
  return (
    <div className="companies-list">
    <div className="companies-container">
        {jobs && jobs.length > 0 ? (
            jobs.map((company) => (
                <div key={company._id} className="company-box-wrapper">
                    <Link to={`/company/${company._id}`} className="company-box">
                        <h2>{company.companyName}</h2>
                        <p><strong>Role:</strong> {company.title}</p>
                        <p><strong>Salary:</strong> {company.salary}</p>
                        <p><strong>Deadline:</strong> {company.deadline}</p>
                    </Link>
                </div>
            ))
        ) : (
            <p>No companies available.</p>
        )}
    </div>
</div>
   
  );
};

export default CompaniesList;
