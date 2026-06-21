import React,{useState}from 'react'
import {Link} from 'react-router-dom';
import img from "../assets/Logo.jpeg";
import '../styles/Navbar.css';

function Navbar() {
  const[isMenuopen,setIsMenuOpen]=useState(false);
  function toggleMenu(){
    setIsMenuOpen(!isMenuopen);
  }
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={img}alt='WeMade Logo'/>
        <span className='brand-text'> Thanishka Reddy Dandu</span>
      </div>
      <div className='hamburger'onClick={toggleMenu}>&#9776;</div>
      <ul className={`navbar-links ${isMenuopen ? 'active' : ''}`}>
        <li><Link to="/"onClick={()=>setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about"onClick={()=>setIsMenuOpen(false)}>About</Link></li>
        <li><Link to="/skills"onClick={()=>setIsMenuOpen(false)}>Skills</Link></li>
        <li><Link to="/resume"onClick={()=>setIsMenuOpen(false)}>Resume</Link></li>
        <li><Link to="/portfolio"onClick={()=>setIsMenuOpen(false)}>Portfolio</Link></li>
        <li><Link to="/certificates"onClick={()=>setIsMenuOpen(false)}>Certificates</Link></li>
        <li><Link to="/contact"onClick={()=>setIsMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar