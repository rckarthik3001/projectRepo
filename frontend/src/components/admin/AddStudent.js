import React, { useState } from 'react';
import axios from 'axios';
import './AddStudent.css';

const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    rollNo: '',
    branch: '',
    section: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/student/add', studentData);
      alert(response.data.message);
      setStudentData({
        name: '',
        rollNo: '',
        branch: '',
        section: '',
        phone: '',
        email: ''
      });
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="add-student-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={studentData.name} onChange={handleChange} required />
        </label>
        <label>
          Roll Number:
          <input type="text" name="rollNo" value={studentData.rollNo} onChange={handleChange} required />
        </label>
        <label>
          Branch:
          <input type="text" name="branch" value={studentData.branch} onChange={handleChange} />
        </label>
        <label>
          Section:
          <input type="text" name="section" value={studentData.section} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phone" value={studentData.phone} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={studentData.email} onChange={handleChange} />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
