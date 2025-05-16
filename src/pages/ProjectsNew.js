import React, { useState, useEffect } from 'react';
import './ProjectsNew.css';

import ultraTickets from '../components/images/ultra-tickets.png';
import ultraSites from '../components/images/ultra-sites.png';
import ultraGamesScoreboard from '../components/images/ultra-games-scoreboard.png';
import kitTracker from '../components/images/kit-tracker.png';
import pdfGen from '../components/images/pdf-gen.png';
import qr from '../components/images/qr.png';
import totals from '../components/images/totals.png';

const projectData = [
    {
      id: 1,
      title: "Ultra Tickets Websites",
      summary:" 🎯 Featured Project - Developed features for ticketing platforms across Ultra brands.",
      description: `Contributed to the development and maintenance of multiple ticketing platforms used by Ultra Events brands.
    
      Work included front-end implementation, backend development in PHP, database handling, and integration with event tools.`,
      image: ultraTickets,
      tech: ["HTML", "CSS", "PHP", "MySQL", "JavaScript", "WordPress"],
      github: "",
      live: "",
      extraLinks: [
        { label: "Ultra tickets.co.uk", url: "https://www.ultratickets.co.uk/uwcb" },
        { label: "Ultra tickets.co", url: "https://ultratickets.co/umma" }
      ]
      },
    {
      id: 2,
      title: "Ultra Games Scoreboard",
      summary: " 🎯 Featured Project - Real-time leaderboard web app used at Ultra Games events.",
      description: `A full-stack web application showcased at Ultra Games events, providing participants and attendees with real-time updates on how their supported teams (and others) are performing.`,
      image: ultraGamesScoreboard,
      tech: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      github: "https://github.com/Jbreets/ultra-games-scoreboard",
      live: "https://scores.theultragames.com/"
    },
    {
      id: 3,
      title: "Ultra Brand Sites",
      summary: "Helped maintain and update websites across Ultra's key brands.",
      description: `Worked on the core brand sites for Ultra Events, focusing on usability improvements, content addition and debugging.
      
        Brands included:
        - Ultra White Collar Boxing
        - Ultra MMA
        - Ultra Comedy
        - Ultra Adventures`,
      image: ultraSites,
      tech: ["HTML", "CSS", "PHP", "MySQL", "JavaScript", "WordPress"],
      github: "",
      live: "",
      extraLinks: [
          { label: "Ultra Events", url: "https://ultraevents.co/" },
          { label: "UWCB", url: "https://www.uwcb.co.uk" },
          { label: "UMMA", url: "https://www.ultramma.co.uk" },
          { label: "UComedy", url: "https://www.ultracomedy.co.uk" },
          { label: "UAdventures", url: "https://www.ultraadventures.co.uk" }
        ]
    },
    {
      id: 4,
      title: "Kit Tracker",
      summary: "Tool for managing returned and missing event kit.",
      description: `A CRUD web application used by general and cleaning staff at Ultra events to accurately track returned and missing kit across different event seasons.`,
      image: kitTracker,
      tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
      github: "https://github.com/Jbreets/kit-tracker",
      live: "https://ultradev.co.uk/sites/kit-tracker/"
    },
    {
      id: 5,
      title: "Flask Functions",
      summary: "Automation tool built with Flask.",
      description: `An in-progress Flask application with multiple modules designed to streamline and automate routine tasks for staff at Ultra events.`,
      image: pdfGen,
      tech: ["Python", "Flask", "HTML"],
      github: "https://github.com/Jbreets/csv-to-pdf",
      live: "https://csv-to-pdf-8zt1.onrender.com/"
    },
    {
      id: 6,
      title: "QR Code Poster Generator",
      summary: "Creates custom posters with QR codes for fundraising.",
      description: `A single-page web app that generates custom posters for UWCB, UMMA, UCOMEDY, and UADVENTURES participants, helping them share their fundraising pages with automatically generated graphics.`,
      image: qr,
      tech: ["PHP", "JavaScript", "Bootstrap", "HTML"],
      github: "https://github.com/Jbreets/qr-code",
      live: "https://poster.ultraevents.co/"
    },
    {
      id: 7,
      title: "Charity Total Display",
      summary: "Live data dashboard for team fundraising morale.",
      description: `A single-page web application built with PHP and JavaScript that integrates live data from the company CRM and charity APIs. It’s currently used in-office to track fundraising progress and boost team morale.`,
      image: totals,
      tech: ["PHP", "JavaScript", "API", "HTML"],
      github: "https://github.com/Jbreets/overall-board",
      live: "https://ultradev.co.uk/sites/overall-board/"
    }
  ];


  export default function ProjectsNew() {
    const [selected, setSelected] = useState(null);
    const [filter, setFilter] = useState("All");
  
    const allTags = ["All", ...new Set(projectData.flatMap(p => p.tech))];
    const filteredProjects = filter === "All" ? projectData : projectData.filter(p => p.tech.includes(filter));
  
    useEffect(() => {
      document.body.classList.toggle('modal-open', !!selected);
    }, [selected]);
  
    return (
      <div className="projects-wrapper">
        <h1 className="projects-heading">My Projects</h1>
  
        <div className="filter-bar">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-button ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
  
        <div className="projects-list">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-tile" onClick={() => setSelected(project)}>
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tech-tags">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {selected && (
          <div className="modal-overlay" onClick={() => setSelected(null)}>
            <div className="modal-card" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelected(null)}>&times;</button>
              <img src={selected.image} alt={selected.title} />
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
              <div className="modal-links">
                  {selected.github && (
                    <a href={selected.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                  {selected.live && (
                    <a href={selected.live} target="_blank" rel="noreferrer">
                      Live Site
                    </a>
                  )}
                  {selected.extraLinks && selected.extraLinks.map(link => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
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
  }
  
