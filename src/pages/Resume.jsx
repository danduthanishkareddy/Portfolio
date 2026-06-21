import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-page">
      <h1 className="name">Dandu Thanishka Reddy</h1>
      <p className="location">Andhra Pradesh(Kadapa), India</p>

      <p className="contact">
        📧 thanishkareddy777@gmail.com | 💼 https://www.linkedin.com/in/thanishka-reddy-87b105398/ | <br></br>🖥️ https://github.com/danduthanishkareddy | 🌐 Portfolio
      </p>

      <section>
        <h2>Career Objective</h2>
        <p>
          Motivated and enthusiastic Computer Science Engineering student with a
          strong interest in Full Stack Development, Artificial Intelligence,
          and Cloud Technologies. Passionate about building responsive web
          applications, solving real-world problems, and continuously improving
          technical skills through hands-on projects and learning.
        </p>
      </section>


      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>B.Tech - Computer Science and Engineering (CSE)</strong><br />
            Annamacharya Institute of Technology and Sciences (AITS), Kadapa<br />
            2023 - 2027 | CGPA: 9.0
          </li>

          <li>
            <strong>Intermediate</strong><br />
            Narayana Junior College, Kadapa<br />
            2021 - 2023 | CGPA: 8.6
          </li>

          <li>
            <strong>SSC</strong><br />
            Narayana School, Kadapa<br />
            2019 - 2020 | CGPA: 10.0
          </li>
        </ul>
      </section>



      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> JavaScript, Java, Python, C</li>
          <li><strong>Frontend:</strong> React.js, HTML5, CSS3, Bootstrap</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MySQL, MongoDB</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code, Eclipse</li>
          <li><strong>Concepts:</strong> Machine Learning, NLP, Cloud Computing, REST APIs</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>

        <div className="project">
          <h3>🌐 Personal Portfolio Website</h3>
          <ul>
            <li>
              Developed a responsive personal portfolio website showcasing
              skills, projects, certificates, resume, and contact information.
            </li>
            <li>
              <strong>Tech Stack:</strong> React.js, JavaScript, CSS, EmailJS
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>🌦️ Weather Application</h3>
          <ul>
            <li>
              Built a weather forecasting application that displays real-time
              weather information using API integration.
            </li>
            <li>
              <strong>Tech Stack:</strong> React.js, JavaScript, Weather API
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>🛒 E-Commerce Website</h3>
          <ul>
            <li>
              Designed and developed a responsive e-commerce website with
              product listings and modern user interface.
            </li>
            <li>
              <strong>Tech Stack:</strong> React.js, JavaScript, CSS
            </li>
          </ul>
        </div>

        <div className="project">
          <h3>🤖 AI Chat Application</h3>
          <ul>
            <li>
              Developed an AI-powered chat application capable of generating
              intelligent responses using AI APIs.
            </li>
            <li>
              <strong>Tech Stack:</strong> React.js, JavaScript, AI API
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>Google Cloud Generative AI Learning Program</li>
          <li>NPTEL - Cloud Computing</li>
          <li>Digital Application Fundamentals (STEM) - NASSCOM FutureSkills Prime</li>
          <li>Quantum Fundamentals Program 2025-2026 - WISER & Qubitech</li>
        </ul>
      </section>

      <section>
        <h2>Strengths</h2>
        <ul>
          <li>Quick Learner and Self-Motivated</li>
          <li>Problem Solving and Analytical Thinking</li>
          <li>Team Collaboration and Communication</li>
          <li>Passion for Continuous Learning</li>
        </ul>
      </section>

      <section>
        <h2>Languages Known</h2>
        <ul>
          <li>English</li>
          <li>Telugu</li>
          <li>Hindi</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;