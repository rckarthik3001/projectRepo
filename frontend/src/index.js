import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './context/AuthContext.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
        <App />
    </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
