import JobPostingCard from './jobPostingCard.js';

const JobPostingList = ({ jobPostings, onSelectJob }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobPostings.length > 0 ? (
                jobPostings.map(job => (
                    <JobPostingCard key={job._id} job={job} onClick={() => onSelectJob(job)} />
                ))
            ) : (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center p-4">
                    <p className="text-gray-500">No job postings found.</p>
                </div>
            )}
        </div>
    );
};

export default JobPostingList;
