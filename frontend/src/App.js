import {React} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home.js';
import Students from './pages/Student/app.js';
import Placements from './pages/Admin/app.js';
import Login from './components/Auth/Login.js';
import Dashboard from './components/admin/Dashboard.js';
import JobPortal from './components/job/jobPortal.js';
import AddJobPost from './components/job/newJob.js';
import ProfileCom from './components/student/Profile.js';
import ProfilePage from './pages/Student/ProfilePage.js';
import AddStdPage from './pages/Admin/AddStudPage.js';
import AddStdComp from './components/admin/AddStudent.js'
import Companies from './pages/Student/Companies.js';
import CompanyDetails from './components/job/CompanyDetails.js'
import CompanyCompAdmin from './components/admin/CompanyListAdmin.js'
import Applications from './pages/Student/Applications.js';
function App() {
    return (
      <>
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/students" element={<Students />} />
                <Route path="/addStudent" element={<AddStdPage />} />
                <Route path="/addStudComp" element={<AddStdComp />} />
                <Route path="/profile" element={<ProfileCom />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/jobpostings" element={<JobPortal />} />
                <Route path="/profilepage" element={<ProfilePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/new-job-post" element = {<AddJobPost />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/company/:id" element={<CompanyDetails />} />
                <Route path="/companycompAdmin" element={<CompanyCompAdmin />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
      </>
    );
}
export default App;
