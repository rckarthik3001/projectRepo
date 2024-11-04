import React from "react";
const JobSortOptions = ({ sortOrder, onSortChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Sort By</label>
            <select
                value={sortOrder}
                onChange={(e) => onSortChange(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="date">Date Posted</option>
                <option value="salary">Salary</option>
            </select>
        </div>
    );
};

export default JobSortOptions;
