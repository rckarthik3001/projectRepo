import React from "react";

import Sidebar from "../../components/student/Sidebar.js";
import ProfilePage from "../../components/student/Profile.js";

const App = () => {
  return (
    <div className="flex">
        <Sidebar />
        <main className="ml-64 p-6 bg-gray-50 flex-1 overflow-y-auto">
            <ProfilePage />
        </main>
        
    </div>
  );
};

export default App;
