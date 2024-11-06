import React from "react";
import CompaniesList from '../../components/job/CompaniesList.js'
import Sidebar from "../../components/student/Sidebar.js";


const Companies = () =>{

    return(
        <div className="flex flex-row mx-1">
            <Sidebar className="fixed top-0 left-0" />
            <div className="ml-64 flex-grow">
                <CompaniesList />
            </div>
        </div>
    )

}

export default Companies;