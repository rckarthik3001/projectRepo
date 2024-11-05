import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import placement1 from './path/to/image1.png'; // Update the path as needed
// import placement2 from './path/to/image2.png'; // Update the path as needed
// import placement3 from './path/to/image3.png'; // Update the path as needed

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>CVR College of Engineering</h1>
        <Link to="/login" className="login-button">Login</Link>
      </header>

      <section className="placement-section">
        <h2>PLACEMENT</h2>
        <div className="placement-images">
          {/* <img src={placement1} alt="Placement 1" />
          <img src={placement2} alt="Placement 2" />
          <img src={placement3} alt="Placement 3" /> */}
        </div>
        <div className="placement-stats">
          <div className="stat-item">
            <p>85%</p>
            <span>PLACEMENT</span>
          </div>
          <div className="stat-item">
            <p>1056</p>
            <span>STUDENTS PLACED</span>
          </div>
          <div className="stat-item">
            <p>7.25L</p>
            <span>HIGHEST SALARY PACKAGE</span>
          </div>
          <div className="stat-item">
            <p>81</p>
            <span>RECRUITERS</span>
          </div>
          <div className="stat-item">
            <p>552</p>
            <span>TOTAL MOUS SIGNED</span>
          </div>
        </div>
      </section>

      <div className='box'>
            
      </div>
    </div>
  );
};

export default HomePage;
