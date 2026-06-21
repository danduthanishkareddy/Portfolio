import React from 'react'
import "../styles/Footer.css";
import {FaGithub,FaLinkedin,FaTwitter,FaInstagram}from "react-icons/fa";


function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-icons'>
        <a href="nkedin.com/in/thanishka-reddy-87b105398/"><FaLinkedin/></a>
        <a href='https://instagram.com'><FaInstagram/></a>
        <a href='https://github.com/danduthanishkareddy'><FaGithub></FaGithub></a>
      </div>
      <p className='footer-text'>
        ©{new Date().getFullYear()} All Rights Reserved by <strong>Thanishka Reddy Dandu</strong>
      </p>
    </footer>
  );
}

export default Footer