//components/Sidebar.js
import React from 'react';
import '../App.css';
import '../styles/Sidebar.css';
import {SidebarData} from './SidebarData';
import { Link } from 'react-router-dom';
import EmployeeTable from './EmployeeTable';
import CompanyDetails from './CompanyDetails'; // Make sure to import CompanyDetails


function Sidebar() {
  return (
    <div className='container'>
        <div className='Sidebar'id="column">
        <ul className='SidebarList'>
        {
            SidebarData.map((val,key) => {
                return(
                    <li key={key} className='row' id={window.location.pathname === val.link ? "active" : ""} 
                    onClick={()=>window.location.pathname = val.link}>
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                );
            })
        }
        </ul>
      </div>
      <div id="column">
        {/* Content for the second column */}
        <h2>Column 2</h2>

        {/* Button to Add Employee */}
        <Link to="/signup" className='add_btn'>
          <button>Add Employee</button>
        </Link>
        

        {/* Content based on the selected link */}
        <section id="employee">
          <EmployeeTable />
        </section>

        <section id="company">
          <CompanyDetails />
        </section>

        {/* Add sections for other links as needed */}
        {/* <section id="pastProjects">
          {/* Content for "Past Projects" */}
        {/* </section>
        <section id="presentProjects">
          {/* Content for "Present Projects" */}
        {/* </section> */}


      </div>
    </div>
  )
}

export default Sidebar
