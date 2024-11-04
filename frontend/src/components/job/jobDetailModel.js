import React from "react";

const JobDetailModal = ({ job, onClose }) => {
    if (!job) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2">
                <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>✖️</button>
                <h2 className="text-xl font-bold">{job.title}</h2>
                <p className="text-gray-700">{job.company}</p>
                <p className="text-gray-500">{job.location}</p>
                <p className="mt-4">{job.description}</p>
                <p className="mt-2 font-semibold">Eligibility Criteria:</p>
                <p className="text-gray-600">{job.eligibilityCriteria}</p>
                <div className="mt-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetailModal;
