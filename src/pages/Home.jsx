import React, { useState, useRef, useEffect } from 'react'
import '../styles/Home.css';
import profileImg from '../assets/profile.jpeg';
import { Link } from 'react-router-dom';


function Home() {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.THREE && vantaRef.current) {
      let effect = window.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00
      })
      setVantaEffect(effect)
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      }
    }
  }, [vantaEffect])
  return (
    <div ref={vantaRef} className="home-vanta">
      <div className='home-content'>
        <div className='text-section'>
          <h1>Hello, I'm <span className='highlight'>Thanishka Reddy</span></h1>
          <h2>Full Stack Developer | React Enthusiast</h2>
          <p>I build responsive and ineractive web applications using modern frontend technologies passionate about clean UI and great user experience.</p>
          <Link to="/resume" className='resume-button'>View Resume</Link>
        </div>
        <div className='image-section'>
          <img src={profileImg} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Home