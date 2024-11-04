// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <nav>
                <ul>
                    <li><Link to="/">Profile</Link></li>
                    <li><Link to="/Companies">Companies</Link></li>
                    <li><Link to="/resumeUpload">Resume Upload</Link></li>
                    <li><Link to="/change-password">Change Password</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
