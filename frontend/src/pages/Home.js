import React from 'react';

function Home() {
    return (
        <div className="container">
            <h2>CVR College of Engineering</h2>

        <div className = "description">
            <h3>Welcome to Career Development Center!!!</h3>
        </div>
        <div className='about'>
            <h3>About Us</h3>
            The College has a Centre for Student Services and Placement, which gives personal and career counseling to the students. The idea is to enable students to effectively cope with life at College as well as in their career. One of the major objectives of the centre is to help students in obtaining internships and placements in reputed companies across various industrial sectors. Assistance is also provided to students in procuring higher education opportunities. The College offers special coaching for GATE, TOEFL, and GRE to its students. They are also encouraged to present technical papers at seminars in other colleges with a view to improving their research and presentation skills. Also, during the last few years, several personality development programs have been conducted by experts from industry.

CVR’ites managed to grab the highest number of recruitments among similar aged institutions. For the 9th year in a row, CVR students have outshined 10s of colleges in securing the highest number of placements in several pool and On Campus recruitment drives.
        </div>
        <div className='organizations'>
            <h3>Organizations in which our students got placed :</h3>
            <ul>
                <li>Accenture</li>
                <li>Infosys</li>
                <li>Wipro</li>
                <li>Capgemini</li>
                <li>CTS</li>
                <li>Amazon</li>
            </ul>
        </div>
        <div className='statistics'>
            <h2>Placement Reports</h2>
            <ul>
                <li>Placements 2024</li>
                <li>Placements 2023</li>
                <li>Placements 2022</li>
            </ul>
        </div>
        <div className='contact'>

            <h5>For any specific assistance, please contact:</h5>
            Ms. Vijaya Mair,
            Associate Dean - Campus & Corporate Relations
            Mobile number - +91 9849877494
            Land line number -  08414 661 663
            Email id - placement@cvr.ac.in, placement.cvr@gmail.com
        </div>
    </div>
    );
}

export default Home;
