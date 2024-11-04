// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar.js';
import Header from '../components/Header.js';
import PlacementDrive from '../components/PlacementDrive.js';

function Companies() {
    return (

        <div className="dashboard">
            <Header />
            <Sidebar/>
            <PlacementDrive/>
        </div>
    );
}

export default Companies;
