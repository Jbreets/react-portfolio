import React, { useState } from 'react';
import './Projects.css';

// Sample project data (replace with your real projects)
const projectsData = [
  {
    id: 1,
    title: "E-Commerce App",
    description: "A full-stack e-commerce platform with React and Node.js.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/400x250?text=E-Commerce+App",
    githubLink: "https://github.com/yourusername/ecommerce-app",
    liveDemo: "https://yourapp.com"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather data using API integration.",
    tags: ["JavaScript", "API", "CSS"],
    image: "https://via.placeholder.com/400x250?text=Weather+Dashboard",
    githubLink: "https://github.com/yourusername/weather-app",
    liveDemo: "https://weatherapp.com"
  },
  {
    id: 3,
    title: "Task Manager",
    description: "CRUD application for managing daily tasks.",
    tags: ["React", "Firebase", "Material UI"],
    image: "https://via.placeholder.com/400x250?text=Task+Manager",
    githubLink: "https://github.com/yourusername/task-manager",
    liveDemo: "https://tasks.com"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ["All", "React", "JavaScript", "Node.js", "API"];

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