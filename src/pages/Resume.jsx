import React from 'react'
import '../styles/Resume.css'
function Resume() {
  return (
    <div className='resume-page'>
      <h1 className='name'>Dandu Thanishka Reddy</h1>
      <p className='location'>Kadapa,Andhra Pradesh</p>
      <p className='contact'>📞 +91 8886444931 |✉️ thanishkareddy777@gmail.com | <a href="#" target="_blank">Portfolio | </a>
      <a href="https://www.linkedin.com/" target='_blank'> LinkedIn</a></p>
      <section>
        <h2>Objective</h2>
        <p>
          A dedicated Computer science engineering student with a strong passinoate about desiging,implementing,and securing software
        </p>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          <li><strong>B. Tech - CSE</strong> | AITS Kadapa | 2023-2027 | CGPA:9.0</li>
          <li><strong>Intermediate</strong>| Narayana Kadapa | 2021-2023 | CGPA:8.6</li>
          <li><strong>SSC</strong>| Narayana Kadapa | 2019-2020 | CGPA:10.0</li>
        </ul>
      </section>
      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> C, MySQL, JavaScript, Reactjs, Nodejs, ExpressJs</li>
          <li><strong>Frameworks & Tech:</strong> HTML, CSS, JQuery, Bootstrap</li>
          <li><strong>Tools:</strong> Git, Vs code, Canva</li>
          <li><strong>Others:</strong> DBMS, Communication, LeaderShip, Teamwork</li>
        </ul>
      </section>
      <section>
        <h2>Projects</h2>
        <div className='project'>
          <h3> 🌐 Personal Portfolio Website</h3>
          <ul>
            <li>Responsive Portfolio highligthing skills, projects, and csrtificates</li>
            <li><strong>Tech Stack:</strong> HTML, CSS, JS, React, Vanta</li>
          </ul>
        </div>
      </section>
      <scetion>
        <h2>Certification & Workshop</h2>
        <ul>
          <li> 🎓 Generative AI for Programming-AITS workshop</li>
          <li> 📃 ReactJS Complete Course - Infosys</li>
        </ul>
      </scetion>

      <section>
            <h2>Extra Curricular Activities</h2>
            <ul>
              <li><strong> Coding club </strong></li>
            </ul>
      </section>
    </div>
  );
};

export default Resume