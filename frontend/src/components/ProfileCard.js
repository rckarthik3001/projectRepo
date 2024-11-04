// src/components/ProfileCard.js
import React from 'react';
import './ProfileCard.css';

function ProfileCard() {
    return (
        <div className="profile-card">
            <h3>HOD Profile</h3>
            <div className="profile-details">
                <p><strong>HOD Name:</strong> Harish Kumar</p>
                <p><strong>Address:</strong> Noida</p>
                <p><strong>Gender:</strong> Male</p>
                <p><strong>Department:</strong> Management</p>
                <p><strong>Phone:</strong> 7987897897</p>
                <p><strong>Email Address:</strong> harish@gmail.com</p>
            </div>
        </div>
    );
}

export default ProfileCard;
