const Student = require('../models/studentModel.js');

// Register a new student
const registerStudent = async (req, res) => {
  const { name, email, password, enrollmentNumber, department, year } = req.body;

  try {
    const student = new Student({
      name,
      email,
      password,
      enrollmentNumber,
      department,
      year
    });
    await student.save();
    res.status(201).json({ message: 'Student registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error registering student' });
  }
};

module.exports = { registerStudent };
