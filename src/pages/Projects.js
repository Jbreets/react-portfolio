import React, { useState } from 'react';
import './Projects.css';

import ultraGamesScoreboard from '../components/images/ultra-games-scoreboard.png';
import kitTracker from '../components/images/kit-tracker.png';
import pdfGen from '../components/images/pdf-gen.png';
import qr from '../components/images/qr.png';
import totals from '../components/images/totals.png';


const projectsData = [
  {
    id: 1,
    title: "Ultra Games scoreboard",
    description: "A full-stack web app to keep and display scores for the ultra games events",
    tags: ["PHP", "MYSQL", "Javascript", "CSS"],
    // add image for Ultra games scoreboard
    image: (ultraGamesScoreboard),
    githubLink: "https://github.com/Jbreets/ultra-games-scoreboard",
    liveDemo: "https://scores.theultragames.com/"
  },
  // {
    // id: 2,
    // title: "Funky Bingo",
    // description: "Website used for the Funky Bingo brand to advertise and sell tickets. (currently down :( )",
    // tags: ["Wordpress", "PHP", "CSS"],
    // image: "https://via.placeholder.com/400x250?text=Weather+Dashboard",
    // githubLink: "https://github.com/Jbreets/funky-bingo",
    // liveDemo: "#blank"
  // },
  {
    id: 3,
    title: "Kit Tracker",
    description: "CRUD application for managing keeping track of kit for Ultra events.",
    tags: ["JavaScript", "PHP", "MYSQL"],
    image: (kitTracker),
    githubLink: "https://github.com/Jbreets/kit-tracker",
    liveDemo: "https://ultradev.co.uk/sites/kit-tracker/"
  },
  {
    id: 4,
    title: "Flask Functions",
    description: "A home for small in house functions used at Ultra events. (in progress)",
    tags: ["Python", "Flask"],
    image: (pdfGen),
    githubLink: "https://github.com/Jbreets/csv-to-pdf",
    liveDemo: "https://pdf.ultradev.co.uk/"
  },
  {
    id: 5,
    title: "QR code",
    description: "Small single function web app used to generate posters with custom QR codes",
    tags: ["PHP"],
    image: (qr),
    githubLink: "https://github.com/Jbreets/qr-code",
    liveDemo: "https://ultradev.co.uk/sites/qr-code/"
  },
  {
    id: 6,
    title: "Charity Total Display",
    description: "Single page web app used to display current amount raised for Ultra events",
    tags: ["PHP", "Javascript", "API"],
    image: (totals),
    githubLink: "https://github.com/Jbreets/overall-board",
    liveDemo: "https://ultradev.co.uk/sites/overall-board/"
  }
  
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ["All", "JavaScript", "MYSQL", "PHP", "Wordpress", "Python", "Flask"];

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="page-content fade-in">
      <h1>My Projects</h1>
      
      {/* Filter Buttons */}
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <div className="tags">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button 
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="modal-links">
              <a 
                href={selectedProject.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {selectedProject.liveDemo && (
                <a 
                  href={selectedProject.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;