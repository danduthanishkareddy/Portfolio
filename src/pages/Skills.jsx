import React from "react";
import "../styles/Skills.css";

const skillsData = [
  { name: "HTML5", percentage: 90 },
  { name: "CSS3", percentage: 85 },
  { name: "JavaScript", percentage: 85 },
  { name: "Bootstrap", percentage: 80 },
  { name: "React.js", percentage: 85 },
  { name: "Node.js", percentage: 65 },
  { name: "MySQL", percentage: 75 },
  { name: "Git & GitHub", percentage: 80 },
  { name: "Java", percentage: 75 },
  { name: "Python", percentage: 70 },
  { name: "Machine Learning", percentage: 70 },
  { name: "Natural Language Processing", percentage: 65 },
  { name: "Cloud Computing", percentage: 65 }
];

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Technical Skills</h2>

      <p className="skills-intro">
        I am a Computer Science Engineering student passionate about
        Full Stack Development, Artificial Intelligence, and Cloud
        Technologies. Below are the technologies and tools I have
        learned through academic projects, personal projects, and
        continuous practice.
      </p>

      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;