import React, { useState } from "react";
import "../styles/Portfolio.css";

import aits1 from "../assets/aits1.jpeg";
import aits2 from "../assets/aits2.jpeg";
import aits3 from "../assets/aits3.jpeg";
import aits4 from "../assets/aits4.jpeg";

const projects = [
  { id: 1, title: "AITS MAIN BUILDING", image: aits1, category: "AITS" },
  { id: 2, title: "AITS CAMPUS VIEW", image: aits2, category: "AITS" },
  { id: 3, title: "AITS ENTRANCE", image: aits3, category: "AITS" },
  { id: 4, title: "AITS TRAINING AND PLACEMENT CELL", image: aits4, category: "AITS" },
];

const categories = ["All", "AITS"];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="portfolio-page">
      <h2 className="portfolio-heading">My Portfolio</h2>

      <p className="portfolio-subheading">
        AITS Kadapa placement portal project screens and campus-related sections.
      </p>

      <div className="portfolio-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h4>{project.title}</h4>
              <span>{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;