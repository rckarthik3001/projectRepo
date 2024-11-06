import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside
        className="d-flex flex-column bg-gradient p-4 vh-100 position-fixed top-0 left-0 shadow-lg"
        style={{ width: '250px', background: 'linear-gradient(to right, #1E40AF, #2563EB)' }}
      >
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

      {/* Dashboard Content */}
      <div
        className="ml-auto p-4"
        style={{
          width: 'calc(100% - 250px)', // Ensure space for the sidebar
          marginLeft: '250px', // Explicit margin to prevent overlap
        }}
      >
        <div className="container">
          <h3 className="text-center mb-5 font-weight-bold">Admin Dashboard</h3>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {/* Total Students Card */}
            <div className="col">
              <div className="card shadow-lg border-0 rounded">
                <div className="card-body text-center">
                  <h5 className="card-title text-dark">Total Students</h5>
                  <p className="card-text display-4 text-primary">1,200</p>
                  <button className="btn btn-primary w-100">View Details</button>
                </div>
              </div>
            </div>

            {/* Total Job Posts Card */}
            <div className="col">
              <div className="card shadow-lg border-0 rounded">
                <div className="card-body text-center">
                  <h5 className="card-title text-dark">Total Job Posts</h5>
                  <p className="card-text display-4 text-primary">340</p>
                  <button className="btn btn-primary w-100">View Details</button>
                </div>
              </div>
            </div>

            {/* Total Companies Card */}
            <div className="col">
              <div className="card shadow-lg border-0 rounded">
                <div className="card-body text-center">
                  <h5 className="card-title text-dark">Total Companies</h5>
                  <p className="card-text display-4 text-primary">45</p>
                  <button className="btn btn-primary w-100">View Details</button>
                </div>
              </div>
            </div>

            {/* Placement Rate Card */}
            <div className="col">
              <div className="card shadow-lg border-0 rounded">
                <div className="card-body text-center">
                  <h5 className="card-title text-dark">Placement Rate</h5>
                  <p className="card-text display-4 text-primary">78%</p>
                  <button className="btn btn-primary w-100">View Details</button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Dashboard Content (e.g., charts, tables) */}
          <div className="mt-5">
            {/* You can add more dashboard components like tables, charts, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
