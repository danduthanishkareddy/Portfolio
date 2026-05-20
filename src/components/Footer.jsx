import React from 'react'
import "../styles/Footer.css";
import {FaGithub,FaLinkedin,FaTwitter,FaInstagram}from "react-icons/fa";


function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-icons'>
        <a href="https://linkedin.com/in/thanishka"><FaLinkedin/></a>
        <a href='https://instagram.com'><FaInstagram/></a>
      </div>
      <p className='footer-text'>
        ©{new Date().getFullYear()} All Rights Reserved by <strong>Thanishka Reddy</strong>
      </p>
    </footer>
  );
}

export default Footer