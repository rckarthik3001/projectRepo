import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CompanyDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const company = state?.company;

    const handleApply = () => {
        alert(`Applied to ${company.name}`);
        navigate('/placement-drive');
    };

    const handleReject = () => {
        alert(`Rejected ${company.name}`);
        navigate('/placement-drive');
    };

    const downloadJobDescription = () => {
        const url = URL.createObjectURL(company.jobDescription);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${company.name}-JobDescription.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="company-details-container">
            <h2>{company.name}</h2>
            <p><strong>Package:</strong> {company.package}</p>
            <p><strong>Deadline:</strong> {new Date(company.deadline).toLocaleString()}</p>
            <button onClick={downloadJobDescription}>Download Job Description</button>
            <button onClick={handleApply}>Apply</button>
            <button onClick={handleReject}>Reject</button>
        </div>
    );
};

export default CompanyDetails;
