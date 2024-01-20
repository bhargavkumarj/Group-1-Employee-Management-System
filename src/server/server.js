// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors=require('cors');

const app = express();
const port = 3001;

app.use(cors());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'employee_management',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to handle form submissions
app.post('/api/addEmployee', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    jobTitle,
    // Add more fields as needed
  } = req.body;

  // Insert data into the database
  const sql = 'INSERT INTO employees (firstName, lastName, email, phone, jobTitle) VALUES (?, ?, ?, ?, ?)';
  const values = [firstName, lastName, email, phone, jobTitle];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true, message: 'Employee added successfully' });
    }
  });
});

// Route to retrieve all employees
app.get('/api/getEmployees', (req, res) => {
  // Select all data from the employees table
  const sql = 'SELECT * FROM employees';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving data from the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true, employees: results });
    }
  });
});

// Update employee details based on ID
app.put('/api/updateEmployee/:id', (req, res) => {
  const employeeId = req.params.id;
  const updatedDetails = req.body;

  // Construct the SQL query for updating an employee
  const sql = 'UPDATE employees SET ? WHERE id = ?';

  db.query(sql, [updatedDetails, employeeId], (err, result) => {
    if (err) {
      console.error('Error updating data in the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Check if any rows were affected
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Employee not found' });
      } else {
        res.json({ success: true, message: 'Employee updated successfully' });
      }
    }
  });
});

// Serve the React app (assuming your React app is using the default build folder)
app.use(express.static('../build'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
