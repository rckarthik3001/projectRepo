const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database.js');
dotenv.config();


const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();


// Routes
app.use('/student',require('./routes/studentRoutes.js'));
app.use('/admin',require('./routes/adminRoutes.js'));

// Start the server
const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});