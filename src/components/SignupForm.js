// src/components/SignupForm.js
// src/components/SignupForm.js
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../styles/SignupForm.css'; // Create a new CSS file for styling
import {Link,useNavigate,useParams } from 'react-router-dom'; // Import useNavigate for v6


const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    // Add more fields as needed
  });

  // Initialize the navigate function for v6
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Fetch data based on id when the component mounts
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/getEmployee/${id}`);
          const employeeData = response.data;
          setFormData(employeeData);
        } catch (error) {
          console.error('Error fetching employee data for update:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
      // Make a POST request to the server
      // const response = await axios.post('http://localhost:3001/api/addEmployee', formData);
      // console.log(response.data); // Log server response

      try {
        if (id) {
          // If id is present, make a PUT request to update the employee
          await axios.put(`http://localhost:3001/api/updateEmployee/${id}`, formData);
          console.log('Employee updated successfully');
        } else {
          // If no id, make a POST request to add a new employee
          await axios.post('http://localhost:3001/api/addEmployee', formData);
          console.log('Employee added successfully');
        }

      // Navigate to the home page after successful submission
      navigate('/');

      // Optionally, reset the form data after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jobTitle: '',
        // Reset more fields as needed
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="signup-form-container">
      <h2>{id ? 'Update Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        {/* Map through the fields in formData */}
        {Object.entries(formData).map(([fieldName, fieldValue]) => (
          <div key={fieldName} className="form-group">
            <label>
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}:
              <input
                type="text"
                name={fieldName}
                value={fieldValue}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}

        <div className="form-group">
          {/* Use Link for navigation */}
          <Link to='/'>
            <button type="submit">Submit</button>
            {/* <button type="submit">{id ? 'Update' : 'Submit'}</button> */}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
