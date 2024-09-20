import React, { useState } from 'react';
//import { useAuth } from '../../hooks/useAuth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const { login } = useAuth();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in:",email);
        //login(email, password);

    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <button className="google-login">Sign in with Google</button>
            <button className="facebook-login">Sign in with Facebook</button>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    // required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    // required 
                />
                <button type="submit">Login</button>
            </form>
            
        </div>
    );
}

export default Login;
