import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-1/4 bg-blue-800 h-screen flex flex-row fixed top-0 left-0">
      <div className="p-4 font-bold text-2xl text-center">Admin Dashboard</div>
      <ul className="bg-blue-800 text-white w-full h-1/4 flex flex-co items-center justify-evenly">
        <NavLink
          to="/dashboard"
          className="p-4 hover:bg-blue-700"
          activeClassName="bg-blue-700"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/jobpostings"
          className="p-4 hover:bg-blue-700"
          activeClassName="bg-blue-700"
        >
          Job Postings
        </NavLink>
        <NavLink
          to="/students"
          className="p-4 hover:bg-blue-700"
          activeClassName="bg-blue-700"
        >
          Students
        </NavLink>
        <NavLink
          to="/companies"
          className="p-4 hover:bg-blue-700"
          activeClassName="bg-blue-700"
        >
          Companies
        </NavLink>
        <NavLink
          to="/applications"
          className="p-4 hover:bg-blue-700"
          activeClassName="bg-blue-700"
        >
          Applications
        </NavLink>
        <NavLink
          to="/reports"
          className="p-4 hover:bg-blue-700"
          activeClassName="bg-blue-700"
        >
          Reports
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
