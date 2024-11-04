import {React} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home.js';
import Students from './pages/student/app.js';
import Placements from './pages/admin/app.js';
import Login from './components/Auth/Login.js';
import Signup from './components/Auth/Signup.js';
import Dashboard from './components/admin/Dashboard.js';
import JobPortal from './pages/admin/jobpostings.js';
import AddJobPost from './components/job/newJob.js';
import PlacementDrive from './components/PlacementDrive.js';
import CompanyDetails from './components/CompanyDetails.js';

    
function App() {
    return (
      <>
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/jobpostings" element={<JobPortal />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/new-job-post" element = {<AddJobPost />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
      </>
    );
}
export default App;
