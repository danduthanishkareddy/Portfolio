import React from "react";
import "../styles/Certificates.css";
import certificate1 from "../assets/certificate1.jpeg"
import certificate2 from "../assets/certificate2.jpeg"
import certificate3 from "../assets/certificate3.jpeg"
import certificate4 from "../assets/certificate4.jpeg"
import certificate5 from "../assets/certificate5.jpeg"
// import cert5 from "../assets/certificates/cert5.jpg"
const certificateData = [
  { id: 1, title: "Google Cloud Generative AI Learning Path - Part 1", image: certificate1 },
  { id: 2, title: "Google Cloud Generative AI Learning Path - Part 2", image: certificate2 },
  { id: 3, title: "Google Cloud Generative AI Learning Path - Part 3", image: certificate3 },
  { id: 4, title: "Digital Application Fundamentals (STEM) - NASSCOM FutureSkills Prime", image: certificate4 },
  { id: 5, title: "Quantum Fundamentals Program 2025-2026 - WISER & Qubitech", image: certificate5 },
  // { id: 5, title: "Real-Time Project Completion Certificate - BDLABS", image: cert5 },
];

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h2 className="certificates-title">My Certificates</h2>
      <p className="certificates-subtext">
        Here are some of the certificates I’ve earned through workshops, online courses, and hands-on trainings.
      </p>

      <div className="certificates-grid">
        {certificateData.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img src={cert.image} alt={cert.title} />
            <h4>{cert.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;