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
        <main className="ml-64 p-6 bg-gray-50 flex-1 overflow-y-auto">
            <Dashboard />
        </main>
        <Routes>
          <Route path="/" element = {<Dashboard />} />
        </Routes>
    </div>
  );
};

export default App;
