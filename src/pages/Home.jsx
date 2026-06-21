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
          <h2>Final Year B.Tech Student | Aspiring Full Stack Developer</h2>
          <p>
            I am a final-year B.Tech student passionate about building modern, responsive, and user-friendly web applications. Skilled in React, JavaScript, HTML, CSS, Node.js, and SQL, I enjoy turning ideas into practical solutions through clean and efficient code. I am continuously learning new technologies and seeking opportunities to apply my skills, contribute to real-world projects, and grow as a software developer.
          </p>
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