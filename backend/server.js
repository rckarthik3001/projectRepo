const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database.js');
const authRoutes = require('./routes/authRoutes.js');

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
app.use('/api/auth', authRoutes);


// Start the server
const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});