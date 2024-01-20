// src/components/EmployeeTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/EmployeeTable.css';
import { Link } from 'react-router-dom';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data when the component mounts
    axios.get('http://localhost:3001/api/getEmployees')
      .then(response => {
        setEmployees(response.data.employees);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleUpdateClick = async (employeeId) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/getEmployee/${employeeId}`);
      const employeeData = response.data;

      // Redirect to the update route with employee data
      window.location.href = `/update/${employeeId}`;
    } catch (error) {
      console.error('Error fetching employee data for update:', error);
    }
  };

  return (
    <div>
      <h2>Employee Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Job Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.jobTitle}</td>
              <td>
                <Link to='signup'>
                <button className="update-button" onClick={() => handleUpdateClick(employee.id)}>Update</button>
                </Link>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
