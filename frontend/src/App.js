import {React} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home.js';
import Students from './pages/Students.js';
import Placements from './pages/Placements.js';
import Login from './components/Auth/Login.js';
import Signup from './components/Auth/Signup.js';
import PlacementDrive from './components/PlacementDrive.js';
import CompanyDetails from './components/CompanyDetails.js';
import Companies from './pages/Companies.js';
    
function App() {
    return (
      <>
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/placement-drive" element={<PlacementDrive />} />
              <Route path="/company-details" element={<CompanyDetails />} />
              <Route path="/companies" element={<Companies />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
      </>
    );
}
export default App;
