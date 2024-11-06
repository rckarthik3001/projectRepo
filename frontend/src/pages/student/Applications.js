import React from "react";
import Sidebar from "../../components/student/Sidebar.js";
import ApplicationsList  from "../../components/student/ApplicationList.js"


const Applications = () =>{
    return(
        <div className="flex flex-row" >
            <Sidebar className="fixed"/>
            <ApplicationsList />
        </div>
    )
}

export default Applications;