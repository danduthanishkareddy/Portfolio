import React from "react";
import "../styles/Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "AI Chat Application",
      tech: "React.js, Node.js, Express.js, CSS",
      points: [
        "Built a responsive AI chatbot interface",
        "Implemented real-time chat functionality",
        "Designed a clean and user-friendly UI",
        "Connected frontend with backend services",
      ],
    },
    {
      title: "E-Commerce Website",
      tech: "React.js, HTML, CSS",
      points: [
        "Developed product listing pages",
        "Created responsive layouts for all devices",
        "Implemented shopping cart UI",
        "Improved user navigation and experience",
      ],
    },
    {
      title: "Weather App",
      tech: "React.js, OpenWeather API, CSS",
      points: [
        "Fetched real-time weather data using API",
        "Displayed temperature and weather conditions",
        "Implemented city-based weather search",
        "Built a responsive and modern interface",
      ],
    },
    {
      title: "Portfolio Website",
      tech: "React.js, CSS, GitHub Pages",
      points: [
        "Showcased skills, projects, and certificates",
        "Added downloadable resume section",
        "Implemented responsive design",
        "Deployed using GitHub Pages",
      ],
    },
  ];

  return (
    <section className="portfolio-page">
      <h2 className="portfolio-heading">Projects</h2>
      <p className="portfolio-subheading">
        Here are some of the projects I have developed while learning Full Stack Development and React.js.
      </p>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-info">
              <h4>{project.title}</h4>
              <span>{project.tech}</span>

              <ul>
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;