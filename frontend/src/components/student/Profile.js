import React, { useEffect, useState } from 'react';
import './Profile.css';

const ProfilePage = () => {
  const [isEditing,setIsEditing] = useState(false);
  const [studentData, setStudentData] = useState({
    name : "",
    department : "",
    section : "",
    rollNumber : "",
    email : "",
    phone : "",
    cgpa : ""
  });
  const [editableFields, setEditableFields] = useState({
    section: false,
    branch: false,
    cgpa: false,
    email: false,
    phone: false
  });

  const fetchStudentData = async () => {
    try{
      const token = localStorage.getItem('token');
      const response = await fetch("http://localhost:5050/api/student/profile",{
        method : "GET",
        headers : {
          'Content-Type' : "application/json",
          'Authorization' : `${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        // Set the student data in state
        setStudentData(data); 
      }else{
        console.log("Error fetching student data : ");
      }

    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  }
  useEffect(() => {
    fetchStudentData();
  },[]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  // Handle toggle edit mode
  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle edit mode
  };

  // Handle save changes
  const handleSaveChanges = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:5050/api/student/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify(studentData) // Send the updated data
    });
    
    if (response.ok) {
      alert("Profile updated successfully!");
      setIsEditing(false); // Exit edit mode
    } else {
      alert("Error updating profile");
    }
  };

  return (
    <div className="profile-container">
      <h2>Student Profile</h2>
      <div className="profile-field">
        <label>Name:</label>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleInputChange}
          />
        ) : (
          <span>{studentData.name}</span>
        )}
      </div>
      <div className="profile-field">
        <label>Roll Number:</label>
        {isEditing ? (
          <input
            type="text"
            name="rollNo"
            value={studentData.rollNumber}
            onChange={handleInputChange}
          />
        ) : (
          <span>{studentData.rollNumber}</span>
        )}
      </div>

      <div className="profile-field">
        <label>Branch:</label>
        {isEditing ? (
          <input
            type="text"
            name="branch"
            value={studentData.department}
            onChange={handleInputChange}
          />
        ) : (
          <span>{studentData.department}</span>
        )}
      </div>

      <div className="profile-field">
        <label>Section:</label>
        {isEditing ? (
          <input
            type="text"
            name="section"
            value={studentData.section}
            onChange={handleInputChange}
          />
        ) : (
          <span>{studentData.section}</span>
        )}
      </div>

      <div className="profile-field">
        <label>CGPA:</label>
        {isEditing ? (
          <input
            type="text"
            name="cgpa"
            value={studentData.cgpa}
            onChange={handleInputChange}
          />
        ) : (
          <span>{studentData.cgpa}</span>
        )}
      </div>

      <div className="profile-field">
        <label>Email:</label>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleInputChange}
          />
        ) : (
          <span>{studentData.email}</span>
        )}
      </div>

      <div className="profile-field">
        <label>Batch:</label>
        {isEditing ? (
          <input
            type="text"
            name="branch"
            value={studentData.year}
            onChange={handleInputChange}
          />
        ) : (
          <span>{studentData.year}</span>
        )}
      </div>

      <div className="profile-field">
        <label>Phone Number:</label>
        {isEditing ? (
          <input
            type="text"
            name="phone"
            value={studentData.phone}
            onChange={handleInputChange}
          />
        ) : (
          <span>{studentData.phone}</span>
        )}
      </div>

      {/* Edit/Save Button */}
      <button onClick={isEditing ? handleSaveChanges : handleEditClick}>
        {isEditing ? 'Save Changes' : 'Edit Profile'}
      </button>
    </div>
  );
};

export default ProfilePage;
