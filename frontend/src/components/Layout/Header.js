import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Placement Management System</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/students">Students</Link> | <Link to="/placements">Placements</Link>
            </nav>
        </header>
    );
}

export default Header;
