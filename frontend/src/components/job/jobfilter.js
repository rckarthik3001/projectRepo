const JobFilter = ({ filters, onFilterChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Filter by Job Type</label>
            <select
                value={filters.jobType}
                onChange={(e) => onFilterChange({ ...filters, jobType: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">All</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
            </select>
        </div>
    );
};

export default JobFilter;
