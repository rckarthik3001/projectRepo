// src/components/CompanyDetail.js
import {React,useContext,useEffect,useState} from 'react';
import './CompanyDetail.css';
import axios from 'axios';
import { useLocation,useParams } from 'react-router-dom';

const CompanyDetails =  () => {
  // const {id}=useParams();
  const location = useLocation();
  // const [company, setCompany] = useState(location.state?.company || null);
  // console.log(props);
  const { id } = useParams(); // Get the company ID from the URL
  const [company, setCompany] = useState(null);

  useEffect(() => {
      // Fetch company details using the ID
      const fetchCompanyDetails = async () => {
          try {
              const response = await axios.get(`http://localhost:5050/api/student/job/${id}`);
              setCompany(response.data);
          } catch (error) {
              console.error('Error fetching company details', error);
          }
      };

      if(id) fetchCompanyDetails();
  }, [id]);


    const handleApply = async () => {
        try {
          const token = localStorage.getItem('token'); // Assumes token is stored here
          const response = await axios.post(`http://localhost:5050/api/student/job-apply/${id}`, {}, {
            headers: {
              'Authorization': `${token}`,
            },
          });
          alert(response.data.message);
        } catch (error) {
          console.error(error);
          alert(error.response?.data?.error || 'Error applying to company');
        }
      };

    const handleReject = () => alert("Application Rejected!");

    if (!company) {
      // Display a loading message or a fallback UI until the company data is available
      return <div>Loading company details...</div>;
  }

    return (
        <div className="company-detail">
            <h1>{company.companyName}</h1>
            <p><strong>Role:</strong> {company.title}</p>
            <p><strong>Salary:</strong> {company.salary}</p>
            <p><strong>Deadline:</strong> {company.deadline}</p>
            <p><strong>Description:</strong> {company.description}</p>
            <div className="actions">
                <button onClick={handleApply}>Apply</button>
                <button onClick={handleReject}>Reject</button>
            </div>
        </div>
    );
};

export default CompanyDetails;
