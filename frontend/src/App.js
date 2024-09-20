import {React} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header.js';
import Footer from './components/Layout/Footer.js';
import Home from './pages/Home.js';
import Students from './pages/Students.js';
import Placements from './pages/Placements.js';
import Login from './components/Auth/Login.js';
import Signup from './components/Auth/Signup.js';
    
function App() {
    return (
      <>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
            </Routes>
            <Footer />
        </Router>
      </>
    );
}
export default App;
