// src/components/CompaniesList.js
import React from 'react';
import { Link } from 'react-router-dom';
import companies from '../companies.js';
import './CompaniesList.css';

const CompaniesList = () => {
    const sortedCompanies = [...companies].sort(
        (a, b) => new Date(b.deadline) - new Date(a.deadline)
    );

    return (
        <div className="companies-list">
            <h1>Available Companies</h1>
            <div className="companies-container">
                {sortedCompanies.map((company) => (
                    <Link to={`/company/${company.id}`} key={company.id} className="company-box">
                        <h2>{company.name}</h2>
                        <p><strong>Role:</strong> {company.jobRole}</p>
                        <p><strong>Salary:</strong> {company.salary}</p>
                        <p><strong>Deadline:</strong> {company.deadline}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CompaniesList;
