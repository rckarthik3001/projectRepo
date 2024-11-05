import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-1/4 bg-blue-800 h-screen flex flex-row fixed top-0 left-0">
      <div className="p-4 font-bold text-2xl text-center">
        <h1>Student Dashboard</h1>
        </div>
      <ul className="bg-blue-800 text-white w-full h-1/4 flex flex-co items-center justify-evenly">
        <NavLink
          to="/profilepage"
          className="p-4 hover:bg-blue-700"
          activeClassName="bg-blue-700"
        >
          Profile
        </NavLink>
        <NavLink
          to="/companycomp"
          className="p-4 hover:bg-blue-700"
          activeClassName="bg-blue-700"
        >
          Companies
        </NavLink>
        
        <NavLink
          to="/reports"
          className="p-4 hover:bg-blue-700"
          activeClassName="bg-blue-700"
        >
          Logout
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
