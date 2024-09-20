import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        // Logic for login
        setUser({ email });
    };

    const signup = (email, password) => {
        // Logic for signup
        setUser({ email });
    };

    const logout = () => {
        // Logic for logout
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
