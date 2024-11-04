import React from "react";
import "./jobportal.css";

const JobSearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search for jobs..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="searchbar"
            />
        </div>
    );
};

export default JobSearchBar;
