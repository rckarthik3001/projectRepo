import React from "react";
import {Routes,Route} from "react-router-dom";

import Sidebar from "../../components/admin/Sidebar.js";
import Dashboard from "../../components/admin/Dashboard.js";
import JobPortal from "./jobpostings.js";
import AddJobPost from "../../components/job/newJob.js";


const App = () => {
  return (
    <div className="flex">
        <Sidebar />
        
        <Routes>
          <Route path="/" element = {<Dashboard />} />
        </Routes>
    </div>
  );
};

export default App;
