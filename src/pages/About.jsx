import React from 'react'
import "../styles/About.css";
import profilePic from "../assets/profile.jpeg";

function About(){
  return (
    <div className="about-wrapper">
      <h2 className="section-title">About</h2>
      <p className="section-intro">
        Hi, I'm D.Thanishka Reddy, a passionate Full Stack Developer and Computer Science student with a strong interest in building modern, responsive, and user-friendly web applications. I have hands-on experience with HTML, CSS, JavaScript, Bootstrap, ReactJS, Python, and Java. Through projects such as AI Chat Application, and E-commerce Website, I have gained practical experience in developing real-world solutions and improving my problem-solving skills. I enjoy learning new technologies, exploring innovative ideas, and continuously improving my development skills to create efficient and impactful applications.
      </p>

      <div className="about-main">
        <div className="about-left">
          <img src={profilePic} alt="D.Thanishka Reddy" />
        </div>

        <div className="about-right">
          <h3>Full Stack Developer.</h3>
          <p className="intro-text">
            <em>
              Hi, I'm D. Thanishka Reddy, a passionate Full Stack Developer currently pursuing my B.Tech in Computer Science and Engineering (2023–2027). I have a strong foundation in HTML, CSS, JavaScript, Bootstrap, ReactJS, Python, and Java, with a keen interest in building responsive, interactive, and user-friendly web applications. Through projects such as AI Chat Application, and E-commerce Website, I am passionate about learning new technologies, improving my problem-solving abilities, and continuously growing as a software developer.
            </em>
          </p>

          <div className="info-grid">
            <div className="info-item">
              <strong>📅 Date-Of-Birth:</strong> 17 April 2006
            </div>
            <div className="info-item">
              <strong>🎂 Age:</strong> 20
            </div>
            <div className="info-item">
              <strong>🌐 Website:</strong> <a href="https://danduthanishkareddy.github.io/Portfolio/">Check Here</a>
            </div>
            <div className="info-item">
              <strong>🎓 Degree:</strong> B.Tech Computer Science
            </div>
            <div className="info-item">
              <strong>📞 Phone:</strong> +91 9959958016
            </div>
            <div className="info-item">
              <strong>📧 Email:</strong> thanishkareddy777@gmail.com
            </div>
            <div className="info-item">
              <strong>🏙️ City:</strong> Andhra Pradesh, YSR District
            </div>
            <div className="info-item">
              <strong>💼 Ready to Work:</strong> Yes
            </div>
          </div>

          <p className="final-text">
           I have worked on academic and personal projects using HTML, CSS, JavaScript, Bootstrap, ReactJS, Python, and Java, which helped me strengthen my problem-solving skills and gain hands-on experience in web development. I am always eager to learn new technologies and continuously improve my skills by building innovative projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
