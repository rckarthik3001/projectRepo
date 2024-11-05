import React, { useState } from 'react';
import './Profile.css';

const ProfilePage = () => {
  const [studentData, setStudentData] = useState({
    name: "John Doe",
    rollNo: "CS12345",
    section: "D",
    branch: "CSE",
    cgpa: "9.0",
    email: "john.doe@example.com",
    phone: "1234567890"
  });

  const [editableFields, setEditableFields] = useState({
    section: false,
    branch: false,
    cgpa: false,
    email: false,
    phone: false
  });

  const handleEditClick = (field) => {
    setEditableFields({ ...editableFields, [field]: !editableFields[field] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  return (
    
    <div className="profile-container">
      <h2>Student Profile</h2>
      <div className="profile-field">
        <label>Name:</label>
        <span>{studentData.name}</span>
      </div>
      <div className="profile-field">
        <label>Roll Number:</label>
        <span>{studentData.rollNo}</span>
      </div>

      <div className="profile-field">
        <label>Section:</label>
        {editableFields.section ? (
          <input
            type="text"
            name="section"
            value={studentData.section}
            onChange={handleInputChange}
            onBlur={() => handleEditClick("section")}
          />
        ) : (
          <span onClick={() => handleEditClick("section")}>
            {studentData.section}
          </span>
        )}
      </div>

      <div className="profile-field">
        <label>Branch:</label>
        {editableFields.branch ? (
          <input
            type="text"
            name="branch"
            value={studentData.branch}
            onChange={handleInputChange}
            onBlur={() => handleEditClick("branch")}
          />
        ) : (
          <span onClick={() => handleEditClick("branch")}>
            {studentData.branch}
          </span>
        )}
      </div>

      <div className="profile-field">
        <label>CGPA:</label>
        {editableFields.cgpa ? (
          <input
            type="text"
            name="cgpa"
            value={studentData.cgpa}
            onChange={handleInputChange}
            onBlur={() => handleEditClick("cgpa")}
          />
        ) : (
          <span onClick={() => handleEditClick("cgpa")}>
            {studentData.cgpa}
          </span>
        )}
      </div>

      <div className="profile-field">
        <label>Email:</label>
        {editableFields.email ? (
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleInputChange}
            onBlur={() => handleEditClick("email")}
          />
        ) : (
          <span onClick={() => handleEditClick("email")}>
            {studentData.email}
          </span>
        )}
      </div>

      <div className="profile-field">
        <label>Phone Number:</label>
        {editableFields.phone ? (
          <input
            type="text"
            name="phone"
            value={studentData.phone}
            onChange={handleInputChange}
            onBlur={() => handleEditClick("phone")}
          />
        ) : (
          <span onClick={() => handleEditClick("phone")}>
            {studentData.phone}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
