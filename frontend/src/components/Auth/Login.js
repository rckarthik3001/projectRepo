// src/LoginPage.js

import React, { useState } from 'react';
import './login.css';  // Ensure styles are applied

function LoginPage() {
    const [role, setRole] = useState('student');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        console.log(`Logging in as ${role} with username: ${username} and password: ${password}`);
        const url = role === "student" ? 'http://localhost:5050/api/login/student' : 'http://localhost:5050/api/login/admin';

        try{
            const response = await fetch(url,{
                method: 'POST',
                headers : { 'Content-Type' : 'application/json'},
                body : JSON.stringify({email : username,password}),
            });

            const data = await response.json();

            if(response.ok){
                console.log("Login Successful");
                localStorage.setItem('token',data.token);

                if(role == 'student'){
                    window.location.href = "/students";
                }else{
                    window.location.href = "/placements";
                }
            }else{
                setError(data.error || "Login Failed");
            }
        }catch(error){
            console.error("Login error: ",error);
            setError('An error occurred , Please try again');
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
