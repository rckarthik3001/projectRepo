import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import placement3 from './img4.jpeg'; // Update the path as needed
import placement2 from './library2.jpg'; // Update the path as needed
import placement1 from './img3.webp'; // Update the path as needed

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>CVR College of Engineering</h1>
        <Link to="/login" className="login-button">Login</Link>
      </header>

      <section className="placement-section">
        <h2>PLACEMENT PORTAL</h2>
        <div className="placement-images ">
          <img src={placement1} alt="Placement 1" />
          <img src={placement2} alt="Placement 2" />
          <img src={placement3} alt="Placement 3" />
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
            <span>TOTAL MEMBERS SIGNED</span>
          </div>
        </div>
      </section>
      <div class="box-row">
      <div><h6 class="c1">OUR</h6></div>
          
        <div><h3 class="c2">TOP RECRUITERS</h3></div>
        <div class="container">
    <div class="gallery">
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/e83/e836e15d2e3495ff9314baf57ae06c65/accenture_1x.png" alt="Accenture"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/2af/2af8da62c5f987a729c3660aa23a97cb/Fusion_1x.png" alt="Fusion"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/20c/20c4f5fe712983637971bdbf2be03b4f/Cognizant-Logo_1x.png" alt="Cognizant"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/ef4/ef4e72f7c46cbad2729fb3fa7e17fb24/IDFC_1x.png" alt="IDFC"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/b97/b975a34cb98a0e46baab972445e38f40/Hexaware_1x.png" alt="Hexaware"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/7ee/7ee371d63298779cfded284b7ac4c66d/Dinamalar_1x.png" alt="Dinamalar"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/d2b/d2b25835a97047b4f699795694287c97/Mindtree_1x.png" alt="Mindtree"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/d4f/d4f5fbb3b8e03452e872792e4a6cd2bd/MRF_1x.png" alt="MRF"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/07a/07a70e4d03990bc9541d0556bfba0acc/Movate_2x.jpg" alt="Movate"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/7c5/7c5fde908b019f94393f5c732ba5ee8d/SS_HCL_2x.jpg" alt="HCL"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/444/4449d03c166e03141d48e87a3cffb0ba/KVB_1x.png" alt="KVB"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/b37/b374d30146ba4bb4922bcc07fa52d7be/Wipro_Logo_1x.png" alt="Wipro"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/d64/d64b9e0737456b3c93ea59ed37df746c/1280px-Infosys_logo.svg_1x.png" alt="Infosys"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/d9a/d9ae7ace54ad5d665f0432b1d552a698/1200px-Tata_Consultancy_Services_Logo.svg_1x.png" alt="TCS"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/09a/09ab31daff65bce7f4f7eb9a00453e61/guideline_based1_1x.png" alt="Guideline Based"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/1a2/1a252dbce56380dded0461500660c60e/amazon_PNG6_1x.png" alt="Amazon"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/38e/38ec383d2aee296de31e0fe51354bcc1/Untitled_design_18_-removebg-preview_1x.png" alt="Design"/>
        </a>
        <a href="#" target="_self">
            <img src="https://cdn.bitrix24.com/b11752903/landing/4b7/4b72c7a55f5d3ca5c2e3e52a17cecc6e/ibm_PNG19658_1x.png" alt="IBM"/>
        </a>
    </div>
</div>
        </div>
    </div>
  );
};

export default HomePage;
