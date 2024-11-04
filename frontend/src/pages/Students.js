// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar.js';
import Header from '../components/Header.js';
import ProfileCard from '../components/ProfileCard.js';
import './Students.css';

function Dashboard() {
    return (

        <div className="dashboard">
            <Header />
            <Sidebar/>
            
            
                
                <div className="content-area">
                    <ProfileCard />
                </div>
            
        </div>
    );
}

export default Dashboard;
