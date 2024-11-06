import React from "react";

const CompanyCard = ({ job, onClick }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 cursor-pointer" onClick={onClick}>
            <h3 className="text-lg font-semibold text-blue-600">{job.companyName}</h3>
            <p className="text-gray-700">{job.title}</p>
            <p className="text-gray-500">{job.location}</p>
            <p className="mt-2 text-sm text-gray-600">Salary: {job.salary}</p>
            <p className="mt-1 text-sm text-gray-500">Job Type: {job.jobType}</p>
        </div>
    );
};

export default CompanyCard;
