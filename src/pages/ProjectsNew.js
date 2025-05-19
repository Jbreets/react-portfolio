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
      description: `A multi-brand ticketing platform used by thousands of participants across Ultra Events' sporting and charity initiatives. The platform supports branded microsites for events like Ultra White Collar Boxing (UWCB), Ultra MMA, and others

      **Key Features:**
      - Custom-built themes and functionality for multiple Ultra brands
      - Dynamic event listings integrated with a central CMS
      - Payment and registration flow integration
      - Mobile-optimized user experience
      - Reusable codebase for global deployment (UK, US, CA)
      
      **My Role:** I contributed to both front-end and back-end development across several ticketing sites. My work included custom PHP modules, WordPress template modifications, JavaScript enhancements, and optimizing MySQL queries for speed. I also collaborated with designers and marketing staff to meet brand guidelines and user needs, As well as creating and implementing hundreds of events and developing additional features such as forms and different event products for company and user needs
      
      **Challenges:**
      - Handling live score updates without a backend framework  
        ➤ Solved using AJAX polling with PHP and MySQL to simulate real-time data sync.
      
      **Results:**
      - Supported the deployment and maintenance 3+ ticketing platforms internationally
      - Improved site load speed and reduced customer support issues
      - Ensured visual consistency while enabling brand-specific flexibility
      - Implemented over 300 evnets allowing the transaction of virtual tickets to thousands of users`,
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
      description: `A full-stack web application used at Ultra Games events to provide live scoring updates for teams. It allows both staff and attendees to track performance in real-time across multiple events.
      
      **Key Features:**
      - Real-time score updates for multiple teams
      - Admin interface to input or adjust scores
      - Mobile-responsive layout for event kiosks and tablets
      - Visual feedback for audience engagement

      **My Role:** I developed the full application from scratch, including front-end UI, backend logic, and database design. I also collaborated with the event coordinator to align the tool with live workflows.

      **Challenges:**
      - Handling live score updates without a backend framework  
        ➤ Solved using AJAX polling with PHP and MySQL to simulate real-time data sync.

      **Results:**
      - Successfully used at 3 large-scale Ultra Games events
      - Reduced score reporting confusion and improved audience engagement
      - Became part of the regular event toolkit

      `
      , 
      image: ultraGamesScoreboard,
      tech: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      github: "https://github.com/Jbreets/ultra-games-scoreboard",
      live: "https://scores.theultragames.com/"
    },
    {
      id: 3,
      title: "Ultra Brand Sites",
      summary: "Helped maintain and update websites across Ultra's key brands.",
      description: `A variety of branded sites for the key aspects of the Ultra Events company including Ultra white collar boxing, ultra MMA, ultra comedy and Ultra adventures. Each function to engage users to sign up as well as view event details and discover more about the company 

      **Key Features:**
      - Fully branded, responsive websites tailored to each Ultra brand
      - Editable WordPress CMS with custom admin interfaces
      - Landing pages optimized for event registration, FAQs, and calls-to-action
      - Integration with third-party marketing tools and CRM systems
      
      **My Role:** I worked across multiple Ultra brand websites, focusing on UI/UX enhancements, content integration, and resolving bugs. I also handled cross-site consistency, implemented security patches, and collaborated with marketing teams to meet changing campaign needs.
      
      **Challenges:**
      - Ensuring a consistent user experience while accommodating each brand’s visual identity  
        ➤ Solved using shared theme frameworks with override capabilities.
      
      **Results:**
      - Contributed to over 4 active brand websites with thousands of daily visitors
      - Improved page load times, SEO performance, and mobile accessibility
      - Supported the successful recruitment and registration of thousands of event participants`,
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
      description: `A CRUD web application designed to help staff at Ultra Events track and manage physical kit (equipment) across events and seasons. It enables fast, accurate monitoring of kit that is returned, in use, or missing — helping reduce losses and improve logistics.

      **Key Features:**
      - User-friendly form interface to add, update, or delete kit records
      - Secure login and access for internal staff
      - Mobile-friendly design for on-site event usage
      - Clear visualisation of kit that has/hasn't returned
      
      **My Role:** I built the application from scratch, working closely with cleaning and logistics staff to understand real-world workflows. I implemented both the front-end and back-end, created the database schema, and deployed the project to an internal server.
      
      **Challenges:**
      - Designing an intuitive system usable by non-technical staff on tight event timelines  
        ➤ Achieved with a clean Bootstrap interface and simplified user flows.
      - Preventing data conflicts across seasonal updates 
        ➤ categorising events by the season thereby allowing easier filtering.
      
      **Results:**
      - Actively used across Ultra’s seasonal event schedule
      - Reduced kit loss and confusion during setup and breakdown
      - Saved hours of manual spreadsheet work and improved tracking accuracy`,
      image: kitTracker,
      tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
      github: "https://github.com/Jbreets/kit-tracker",
      live: "https://ultradev.co.uk/sites/kit-tracker/"
    },
    {
      id: 5,
      title: "Flask Functions",
      summary: "Automation tool built with Flask.",
      description: `A modular backend tool built in Flask for automating various staff tasks at Ultra Events. Designed to simplify internal processes like data formatting, bulk CSV operations, and PDF generation — all accessible through a lightweight web interface. 

      **Key Features:**
      - Upload and convert CSV files into styled PDFs
      - Generate clean csv files from large datasets and keys
      - Expandable module system for future tools
      - Clean UI for internal team use with minimal training
      
      **My Role:** I initiated and continue to build out this tool in response to repeated manual tasks identified by event coordinators. I created the architecture with extensibility in mind and added features based on staff feedback.
      
      **Challenges:**
      - Supporting flexible file input while maintaining formatting rules 
        ➤ Used Python’s csv and reportlab/fpdf libraries for precise control.
      
      **Results:**
      - Making Flask modules user-friendly for non-devs
        ➤ Designed a modular UI using simple HTML forms and visual cues.`,
      image: pdfGen,
      tech: ["Python", "Flask", "HTML"],
      github: "https://github.com/Jbreets/csv-to-pdf",
      live: "https://csv-to-pdf-8zt1.onrender.com/"
    },
    {
      id: 6,
      title: "QR Code Poster Generator",
      summary: "Creates custom posters with QR codes for fundraising.",
      description: `A single-page application used to generate branded fundraising posters for participants of Ultra Events, including UWCB, UMMA, UCOMEDY, and UADVENTURES. The tool allows users to input their details and instantly generate a downloadable graphic with a unique QR code linking to their personal fundraising page. 

      **Key Features:**
      - Dynamic QR code generation linked to individual fundraising pages
      - Auto-populated poster layout with user name, event, and charity info
      - Mobile-optimized for on-the-go poster creation
      - One-click download functionality for sharing and printing
      
      **My Role:** I built this app from the ground up, working with Ultra's fundraising team to understand the poster requirements and automate the process. I also integrated it with internal data sources to streamline user access.
      
      **Challenges:**
      - Generating high-quality, branded images dynamically  
        ➤ Solved using server-side image rendering with PHP and custom layouts.
      - Ensuring QR code accuracy and readability on all devices  
        ➤ Integrated QR libraries and tested across multiple resolutions and environments.
      
      **Results:**
      - Boosted visibility and fundraising engagement for hundreds of participants
      - Removed the need for manual poster creation
      - Used consistently across multiple Ultra Events brands`,
      image: qr,
      tech: ["PHP", "JavaScript", "Bootstrap", "HTML"],
      github: "https://github.com/Jbreets/qr-code",
      live: "https://poster.ultraevents.co/"
    },
    {
      id: 7,
      title: "Charity Total Display",
      summary: "Live data dashboard for team fundraising morale.",
      description: `An internal dashboard used at Ultra HQ to display live fundraising totals across all brands and events. Pulls real-time data from internal CRMs and external charity APIs to provide accurate and motivational stats for staff. 

      **Key Features:**
      - Live API integration with multiple charity platforms
      - Custom visual display for running totals and performance
      - Auto-refresh and animation for live updating on wall monitors
      - Minimalist design focused on team morale and transparency
      
      **My Role:** I designed and developed the display from concept to production, with an emphasis on readability, accuracy, and low-latency updates. I handled the integration with internal tools and REST APIs from charity partners.
      
      **Challenges:**
      - Merging data from inconsistent API formats  
        ➤ Built a custom data normalizer in PHP to unify external sources.
      - Ensuring real-time updates without degrading performance  
        ➤ Used timed polling and client-side rendering with minimal backend load.
      
      **Results:**
      - Actively displayed in the Ultra office across multiple screens
      - Motivation for those working within the Ultra Events team
      - Clear and consistent benchmark of distance to company goals and records`,
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
              <div className="modal-tech-tags">
                <h4>Tech Used:</h4>
                <div className="tech-tags">
                  {selected.tech.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
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
  
