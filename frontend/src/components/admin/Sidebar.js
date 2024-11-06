import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="d-flex flex-column bg-gradient p-4 vh-100 position-fixed top-0 left-0 shadow-lg" style={{ width: '250px', background: 'linear-gradient(to right, #1E40AF, #2563EB)' }}>
      <div className="text-center mb-5">
        <h1 className="text-white">Admin Portal</h1>
      </div>
      <ul className="list-unstyled">
        <li>
          <NavLink
            to="/placements"
            className="d-block text-white p-3 rounded mb-2 hover-bg-primary"
            activeClassName="bg-primary"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobpostings"
            className="d-block text-white p-3 rounded mb-2 hover-bg-primary"
            activeClassName="bg-primary"
          >
            Job Postings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addStudent"
            className="d-block text-white p-3 rounded mb-2 hover-bg-primary"
            activeClassName="bg-primary"
          >
            Add Student
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/companycompadmin"
            className="d-block text-white p-3 rounded mb-2 hover-bg-primary"
            activeClassName="bg-primary"
          >
            Companies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/applications"
            className="d-block text-white p-3 rounded mb-2 hover-bg-primary"
            activeClassName="bg-primary"
          >
            Students
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logout"
            className="d-block text-white p-3 rounded mb-2 hover-bg-danger"
            activeClassName="bg-danger"
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
