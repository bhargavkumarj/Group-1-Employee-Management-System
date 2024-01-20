import React,{useState} from 'react';
import Logo from '../assets/logo2.jpg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {

    const[openLinks,setOpenLinks] = useState(false);

    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    };

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} alt=' description of pic used'/>
        <h2>Employee Management System</h2>
        <div className='hiddenLinks'>
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
        <ReorderIcon/>
        </button>
      </div>
    </div>
  );
}

export default Navbar
