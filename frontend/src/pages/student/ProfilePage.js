import React from "react";
import {Routes,Route} from "react-router-dom";

import Sidebar from "../../components/student/Sidebar.js";
import ProfilePage from "../../components/student/Profile.js";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <Sidebar className="fixed"/>
        <ProfilePage />
        
    </div>
  );
};

export default App;
