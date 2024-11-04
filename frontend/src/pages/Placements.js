// src/pages/Dashboard.js
import React from 'react';
import Navbar from '../components/AdminNavbar.js';
import Header from '../components/Header.js';
import ProfileCard from '../components/ProfileCard.js';
import './Students.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <Header />
            <Navbar />
                <div className="content-area">
                    <ProfileCard />
                </div>
        </div>
    );
}

export default Dashboard;
