// src/components/CompanyDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import companies from '../companies.js';
import './CompanyDetail.css';

const CompanyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const company = companies.find((company) => company.id === parseInt(id));

    if (!company) return <h2>Company Not Found</h2>;

    const handleApply = () => alert("Application Submitted!");
    // const handleReject = () => navigate('/');
    const handleReject = () => alert("Application Rejected!");

    return (
        <div className="company-detail">
            <h1>{company.name}</h1>
            <p><strong>Role:</strong> {company.jobRole}</p>
            <p><strong>Salary:</strong> {company.salary}</p>
            <p><strong>Deadline:</strong> {company.deadline}</p>
            <p><strong>Description:</strong> {company.description}</p>
            <div className="actions">
                <button onClick={handleApply}>Apply</button>
                <button onClick={handleReject}>Reject</button>
            </div>
        </div>
    );
};

export default CompanyDetail;
