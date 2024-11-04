import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlacementDrive.css';

const PlacementDrive = () => {
    const [companies, setCompanies] = useState([]);
    const [newCompany, setNewCompany] = useState({
        name: '',
        package: '',
        deadline: '',
        jobDescription: ''
    });
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCompany({ ...newCompany, [name]: value });
    };

    const handleAddCompany = () => {
        setCompanies([newCompany, ...companies]);
        setNewCompany({
            name: '',
            package: '',
            deadline: '',
            jobDescription: ''
        });
        setShowForm(false);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const goToCompanyDetails = (company) => {
        navigate('/company-details', { state: { company } });
    };

    return (
        <div className="placement-drive-container">
            <header className="header">
                <h2>Placement Drive</h2>
                <button className="add-button" onClick={toggleForm}>
                    {showForm ? 'Close' : 'Add Company'}
                </button>
            </header>

            {showForm && (
                <div className="add-company-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Company Name"
                        value={newCompany.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="package"
                        placeholder="Package"
                        value={newCompany.package}
                        onChange={handleInputChange}
                    />
                    <input
                        type="datetime-local"
                        name="deadline"
                        placeholder="Deadline"
                        value={newCompany.deadline}
                        onChange={handleInputChange}
                    />
                    <input
                        type="file"
                        name="jobDescription"
                        onChange={(e) =>
                            handleInputChange({
                                target: { name: 'jobDescription', value: e.target.files[0] }
                            })
                        }
                    />
                    <button onClick={handleAddCompany}>Add Company</button>
                </div>
            )}

            <div className="company-list">
                {companies.map((company, index) => (
                    <div
                        key={index}
                        className="company-card"
                        onClick={() => goToCompanyDetails(company)}
                    >
                        <h3>{company.name}</h3>
                        <p>Package: {company.package}</p>
                        <p>Deadline: {new Date(company.deadline).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlacementDrive;
