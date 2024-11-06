import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';
import Logout from "../Auth/Logout.js";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>Student Dashboard</h1>
      </div>
      <ul className="sidebar-menu">
        <NavLink
          to="/profilepage"
          className="sidebar-menu-item"
          activeClassName="active"
        >
          Profile
        </NavLink>
        <NavLink
          to="/companies"
          className="sidebar-menu-item"
          activeClassName="active"
        >
          Companies
        </NavLink>
        <NavLink to='/applications'
        className="sidebar-menu-item"
        activeClassName="active">
          Applications
        </NavLink>
        <NavLink to='/notifications'
        className="sidebar-menu-item"
        activeClassName="active">
          Notifications
        </NavLink>
        <NavLink to='/help'
        className="sidebar-menu-item"
        activeClassName="active">
          Help
        </NavLink>
      </ul>
      <Logout ></Logout>
    </aside>
  );
};

export default Sidebar;
