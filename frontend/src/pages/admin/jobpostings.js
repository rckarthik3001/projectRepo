import React from "react";
import JobPortal from "../../components/job/jobPortal.js";
function jobPostings(){
    return(
        <div className="w-screen h-screen flex flex-col">
            <JobPortal />
        </div>
    )
}

export default jobPostings;