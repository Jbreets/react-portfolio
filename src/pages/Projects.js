import React, { useState } from 'react';
import './Projects.css';


import ultraTickets from '../components/images/ultra-tickets.png';
import ultraSites from '../components/images/ultra-sites.png';
import ultraGamesScoreboard from '../components/images/ultra-games-scoreboard.png';
import kitTracker from '../components/images/kit-tracker.png';
import pdfGen from '../components/images/pdf-gen.png';
import qr from '../components/images/qr.png';
import totals from '../components/images/totals.png';

const projectsData = [
  {
    id: 1,
    title: "Ultra Tickets Websites",
    description: `
      Contributed to the development and maintenance of multiple ticketing platforms used by Ultra Events brands. 
      Work included front-end implementation, backend development in PHP, database handling, and integration with event tools.

      Sites worked on:
      - Ultra tickets.co.uk
      - Ultra Tickets.co (UK, USA, CA, AU)
    `,
    tags: ["HTML", "CSS", "PHP", "MYSQL", "Javascript", "Wordpress", "Eccomerce"],
    image: ultraTickets,
    githubLink: "",
    extraLinks: [
      { label: "Ultra tickets.co.uk", url: "https://www.ultratickets.co.uk/uwcb" },
      { label: "Ultra tickets.co", url: "https://www.ultratickets.co.uk/umma" }
    ]
  },
  {
    id: 2,
    title: "Ultra Events Brand Websites",
    description: `
      Worked on the core brand sites for Ultra Events, focusing on usability improvements, content addition and debugging.

      Sites involved:
      - Ultra White Collar Boxing (UWCB)
      - Ultra MMA (UMMA)
      - Ultra Comedy (UComedy)
      - Ultra Adventures (UAdventures)
    `,
    tags: ["HTML", "CSS", "PHP", "MYSQL", "Javascript", "Wordpress"],
    image: ultraSites,
    githubLink: "",
    extraLinks: [
      { label: "Ultra Events", url: "https://ultraevents.co/" },
      { label: "UWCB", url: "https://www.uwcb.co.uk" },
      { label: "UMMA", url: "https://www.ultramma.co.uk" },
      { label: "UComedy", url: "https://www.ultracomedy.co.uk" },
      { label: "UAdventures", url: "https://www.ultraadventures.co.uk" }
    ]
  },
  {
    id: 3,
    title: "Ultra Games Scoreboard",
    description: "A full-stack web application showcased at Ultra Games events, providing participants and attendees with real-time updates on how their supported teams (and others) are performing.",
    tags: ["HTML", "CSS", "PHP", "MYSQL", "Javascript"],
    image: ultraGamesScoreboard,
    githubLink: "https://github.com/Jbreets/ultra-games-scoreboard",
    liveDemo: "https://scores.theultragames.com/"
  },
  {
    id: 4,
    title: "Kit Tracker",
    description: "A CRUD web application used by general and cleaning staff at Ultra events to accurately track returned and missing kit across different event seasons.",
    tags: ["HTML", "Bootstrap", "JavaScript", "PHP", "MYSQL"],
    image: kitTracker,
    githubLink: "https://github.com/Jbreets/kit-tracker",
    liveDemo: "https://ultradev.co.uk/sites/kit-tracker/"
  },
  {
    id: 5,
    title: "Flask Functions",
    description: "An in-progress Flask application with multiple modules designed to streamline and automate routine tasks for staff at Ultra events.",
    tags: ["Python", "Flask", "HTML"],
    image: pdfGen,
    githubLink: "https://github.com/Jbreets/csv-to-pdf",
    liveDemo: "https://pdf.ultradev.co.uk/"
  },
  {
    id: 6,
    title: "QR Code Generator",
    description: "A single-page web app that generates custom posters for UWCB, UMMA, UCOMEDY, and UADVENTURES participants, helping them share their fundraising pages with automatically generated graphics.",
    tags: ["PHP", "Javascript", "HTML", "Bootstrap"],
    image: qr,
    githubLink: "https://github.com/Jbreets/qr-code",
    liveDemo: "https://poster.ultraevents.co/"
  },
  {
    id: 7,
    title: "Charity Total Display",
    description: "A single-page web application built with PHP and JavaScript that integrates live data from the company CRM and charity APIs. It’s currently used in-office to track fundraising progress and boost team morale.",
    tags: ["PHP", "Javascript", "API", "HTML"],
    image: totals,
    githubLink: "https://github.com/Jbreets/overall-board",
    liveDemo: "https://ultradev.co.uk/sites/overall-board/"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ["All", "HTML", "CSS", "Bootstrap", "JavaScript", "MYSQL", "PHP", "Wordpress", "Python", "Flask"];

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="page-content fade-in">
      <h1>My Projects</h1>

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
            <pre className="description">{selectedProject.description}</pre>
            <div className="modal-links">
              {selectedProject.githubLink && (
                <a 
                  href={selectedProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {selectedProject.liveDemo && (
                <a 
                  href={selectedProject.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
              {selectedProject.extraLinks && selectedProject.extraLinks.map(link => (
                <a 
                  key={link.label}
                  href={link.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
