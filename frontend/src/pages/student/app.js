import React from "react";
import {Routes,Route} from "react-router-dom";

import Sidebar from "../../components/student/Sidebar.js";
import Dashboard from "../../components/student/Dashboard.js";

const App = () => {
  return (
    <div className="flex">
        <Sidebar />
        <main className="ml-64 p-6 bg-gray-50 flex-1 overflow-y-auto">
            <Dashboard />
        </main>
        
    </div>
  );
};

export default App;
