import React from "react";
import {Routes,Route} from "react-router-dom";

import Sidebar from "../../components/student/Sidebar.js";
import Dashboard from "../../components/student/Dashboard.js";
import ProfilePage from "../../components/student/Profile.js";

const App = () => {
  return (
    <div className="flex">
        <Sidebar />
        
        <ProfilePage />
        
    </div>
  );
};

export default App;
