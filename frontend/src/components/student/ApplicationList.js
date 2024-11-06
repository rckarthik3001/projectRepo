// src/Applications.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming token is stored in local storage
        const response = await axios.get('http://localhost:5050/api/student/myJobs', {
          headers: {
            Authorization: `${token}`,
          },
        });
        setApplications(response.data.jobs);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };
    
    fetchApplications();
  }, []);

  return (
    <div>
      <h2>Applied Jobs</h2>
      {applications.length ? (
        applications.map((job) => (
          <div key={job._id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Description:</strong> {job.description}</p>
          </div>
        ))
      ) : (
        <p>No applications found.</p>
      )}
    </div>
  );
};

export default ApplicationList;
