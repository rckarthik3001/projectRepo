// src/components/ProfileCard.js

import './ProfileCard.css';

import React, { useState } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        department: 'Enter Department',
        year: '4th Year',
        cgpa: 'Enter your cgpa',
        email: 'Enter Email',
        phone: 'Enter Phone umber',
        bio: 'Software engineer with a passion for technology.',
        skills: 'JavaScript, HTML, CSS, Node.js'
    });

    const [isEditable, setIsEditable] = useState({
        name: false,
        department: false,
        year: false,
        cgpa: false,
        email: false,
        phone: false,
        bio: false,
        skills: false
    });

    const handleEditClick = (field) => {
        setIsEditable(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProfile(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Profile saved successfully!');
        // Here, you can add code to send data to backend or update state globally
    };

    return (
        <div className="profile-container">
            <h2>My Profile</h2>
            <form className="profile-form" onSubmit={handleSubmit}>
                {Object.keys(profile).map((field) => (
                    <div className="form-group" key={field}>
                        <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                        {field === 'bio' ? (
                            <textarea
                                id={field}
                                rows="4"
                                value={profile[field]}
                                onChange={handleChange}
                                disabled={!isEditable[field]}
                            />
                        ) : (
                            <input
                                type="text"
                                id={field}
                                value={profile[field]}
                                onChange={handleChange}
                                disabled={!isEditable[field]}
                            />
                        )}
                        <button type="button" className="edit-btn" onClick={() => handleEditClick(field)}>
                            {isEditable[field] ? 'Lock' : 'Edit'}
                        </button>
                    </div>
                ))}
                <button type="submit" className="save-btn">Save Changes</button>
            </form>
        </div>
    );
};

export default Profile;
