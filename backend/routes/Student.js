const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Route to add a new student
router.post('/add', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({ message: 'Student added successfully', student: newStudent });
  } catch (error) {
    res.status(400).json({ message: 'Error adding student', error });
  }
});

module.exports = router;
