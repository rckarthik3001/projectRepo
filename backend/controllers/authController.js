const jwt = require('jsonwebtoken');
const Student = require('../models/studentModel.js');
const Admin = require('../models/adminModel.js');

// Generate JWT Token with role

const generateToken = (id, role) => {
    return jwt.sign({ id, role }, 'cvrcoe', { expiresIn: '1h' });
  };
  
  const loginStudent = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const student = await Student.findOne({ email });
      if (!student || !(await student.comparePassword(password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = generateToken(student._id, 'student'); // Include role
      res.json({ token, student: { id: student._id, name: student.name, email: student.email } });
    } catch (err) {
      res.status(500).json({ error: 'Error logging in' });
    }
  };
  
  const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const admin = await Admin.findOne({ email });
      if (!admin || !(await admin.comparePassword(password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = generateToken(admin._id, 'admin'); // Include role
      res.json({ token, admin: { id: admin._id, name: admin.name, email: admin.email } });
    } catch (err) {
      res.status(500).json({ error: 'Error logging in' });
    }
  };

  module.exports = { loginStudent, loginAdmin };
  