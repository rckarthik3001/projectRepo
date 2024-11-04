// src/LoginPage.js

import React, { useState } from 'react';
import './login.css';  // Ensure styles are applied

function LoginPage() {
    const [role, setRole] = useState('student');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`Logging in as ${role} with username: ${username} and password: ${password}`);
        if (role === 'student') {
            // Navigate to student dashboard
        } else {
            // Navigate to admin dashboard
        }
    };

    return (
        <div className="login-container">
        <div className="login-page">
            <h2>Placement Management System</h2>
            <form onSubmit={handleLogin}>
                <div className="role-selection">
                    <label>
                        <input
                            type="radio"
                            value="student"
                            checked={role === 'student'}
                            onChange={() => setRole('student')}
                        />
                        Student
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="admin"
                            checked={role === 'admin'}
                            onChange={() => setRole('admin')}
                        />
                        Admin
                    </label>
                </div>

                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
}

export default LoginPage;
