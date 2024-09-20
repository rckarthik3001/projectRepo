import React, { useState } from 'react';
//import { useAuth } from '../../hooks/useAuth';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   // const { signup } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        Signup(email, password);
    };

    return (
        <div className="container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        // value={email} 
                        // onChange={(e) => setEmail(e.target.value)} 
                        // required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        // value={password} 
                        // onChange={(e) => setPassword(e.target.value)} 
                        // required
                    />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
