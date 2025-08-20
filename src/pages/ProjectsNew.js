import React, { useState, useEffect } from 'react';
import './ProjectsNew.css';
// import projectData from './Projects';

import {
  ultraTickets,
  ultraSites,
  ultraGamesScoreboard,
  scraper,
  kitTracker,
  pdfGen,
  sponsorGen,
  qr,
  totals,
  csharpCalculator,
  employeeManagerApp,
  ToDoApp,
} from '../components/images';


const projectData = [
    {
      id: 1,
      title: "Ultra Tickets Websites",
      summary:" 🎯 Featured Project - Developed features for ticketing platforms across Ultra brands.",
      description: `A multi-brand ticketing platform used by thousands of participants across Ultra Events' sporting and charity initiatives. The platform supports branded microsites for events like Ultra White Collar Boxing (UWCB), Ultra MMA, and others

      Key Features:
      - Custom-built themes and functionality for multiple Ultra brands
      - Dynamic event listings integrated with a central CMS
      - Payment and registration flow integration
      - Mobile-optimized user experience
      - Reusable codebase for global deployment (UK, US, CA)
      
      My Role: 
      I contributed to both front-end and back-end development across several ticketing sites. My work included custom PHP modules, WordPress template modifications, JavaScript enhancements, and optimizing MySQL queries for speed. I also collaborated with designers and marketing staff to meet brand guidelines and user needs, As well as creating and implementing hundreds of events and developing additional features such as forms and different event products for company and user needs
      
      Challenges:
      - Handling live score updates without a backend framework  
        ➤ Solved using AJAX polling with PHP and MySQL to simulate real-time data sync.
      
      Results:
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
      
      Key Features:
      - Real-time score updates for multiple teams
      - Admin interface to input or adjust scores
      - Mobile-responsive layout for event kiosks and tablets
      - Visual feedback for audience engagement

      My Role: 
      I developed the full application from scratch, including front-end UI, backend logic, and database design. I also collaborated with the event coordinator to align the tool with live workflows.

      Challenges:
      - Handling live score updates without a backend framework  
        ➤ Solved using AJAX polling with PHP and MySQL to simulate real-time data sync.

      Results:
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

      Key Features:
      - Fully branded, responsive websites tailored to each Ultra brand
      - Editable WordPress CMS with custom admin interfaces
      - Landing pages optimized for event registration, FAQs, and calls-to-action
      - Integration with third-party marketing tools and CRM systems
      
      My Role: 
      I worked across multiple Ultra brand websites, focusing on UI/UX enhancements, content integration, and resolving bugs. I also handled cross-site consistency, implemented security patches, and collaborated with marketing teams to meet changing campaign needs.
      
      Challenges:
      - Ensuring a consistent user experience while accommodating each brand’s visual identity  
        ➤ Solved using shared theme frameworks with override capabilities.
      
      Results:
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
      title: "Tyre Scraper CLI Tool",
      summary: "Command-line PHP tool for scraping tyre data from e-commerce websites.",
      description: `A terminal-based web scraper designed to extract structured tyre information from justtyres.co.uk. The tool collects brand, size, pattern, and price data across multiple pages, filtering it based on specified tyre dimensions. It can output the results to both a CSV file and a MySQL database for further analysis or integration.
    
      Key Features:
      - Command-line scraper built with PHP and DOM parsing
      - Filters tyres by specified width, aspect ratio, and rim size
      - Exports data to CSV and inserts into a relational database
      - Lightweight and modular structure for easy expansion to other sites
    
      My Role:
      I built this scraper from scratch as a technical coding test. I structured the code to handle DOM traversal, pagination, data filtering, and output logic. I also created a clean README, database schema, and GitHub-ready project for reuse or deployment.
    
      Challenges:
      - Navigating inconsistent HTML structures while maintaining performance
        ➤ Solved using XPath and defensive parsing with DOMDocument
      - Building a flexible exporter that supports multiple output formats
        ➤ Achieved with separate functions for CSV and database export
    
      Results:
      - Scraper successfully extracts and stores tyre data in both flat file and DB formats
      - Easily adaptable to other retailers with minimal code changes
      - Ideal starting point for larger-scale web data ingestion or price monitoring tasks`,
      image: scraper, // You can replace this with your actual image import
      tech: ["PHP", "MySQL", "CLI"],
      github: "https://github.com/Jbreets/php-scraper"
    },
    
    {
      id: 5,
      title: "Kit Tracker",
      summary: "Tool for managing returned and missing event kit.",
      description: `A CRUD web application designed to help staff at Ultra Events track and manage physical kit (equipment) across events and seasons. It enables fast, accurate monitoring of kit that is returned, in use, or missing — helping reduce losses and improve logistics.

      Key Features:
      - User-friendly form interface to add, update, or delete kit records
      - Secure login and access for internal staff
      - Mobile-friendly design for on-site event usage
      - Clear visualisation of kit that has/hasn't returned
      
      My Role: 
      I built the application from scratch, working closely with cleaning and logistics staff to understand real-world workflows. I implemented both the front-end and back-end, created the database schema, and deployed the project to an internal server.
      
      Challenges:
      - Designing an intuitive system usable by non-technical staff on tight event timelines  
        ➤ Achieved with a clean Bootstrap interface and simplified user flows.
      - Preventing data conflicts across seasonal updates 
        ➤ categorising events by the season thereby allowing easier filtering.
      
      Results:
      - Actively used across Ultra’s seasonal event schedule
      - Reduced kit loss and confusion during setup and breakdown
      - Saved hours of manual spreadsheet work and improved tracking accuracy`,
      image: kitTracker,
      tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
      github: "https://github.com/Jbreets/kit-tracker",
      live: "https://ultradev.co.uk/sites/kit-tracker/"
    },
    {
      id: 6,
      title: "Flask Functions",
      summary: "Automation tool built with Flask.",
      description: `A modular backend tool built in Flask for automating various staff tasks at Ultra Events. Designed to simplify internal processes like data formatting, bulk CSV operations, and PDF generation — all accessible through a lightweight web interface. 

      Key Features:
      - Upload and convert CSV files into styled PDFs
      - Generate clean csv files from large datasets and keys
      - Expandable module system for future tools
      - Clean UI for internal team use with minimal training
      
      My Role: 
      I initiated and continue to build out this tool in response to repeated manual tasks identified by event coordinators. I created the architecture with extensibility in mind and added features based on staff feedback.
      
      Challenges:
      - Supporting flexible file input while maintaining formatting rules 
        ➤ Used Python’s csv and reportlab/fpdf libraries for precise control.
      
      Results:
      - Making Flask modules user-friendly for non-devs
        ➤ Designed a modular UI using simple HTML forms and visual cues.`,
      image: pdfGen,
      tech: ["Python", "Flask", "HTML"],
      github: "https://github.com/Jbreets/csv-to-pdf",
      live: "https://csv-to-pdf-8zt1.onrender.com/"
    },
    {
      id: 7,
      title: "Wordpress Sponsor Image Generator Plugin",
      summary: "WordPress Plugin - Dynamic image generator for event sponsors with custom branding",
      description: `A custom WordPress plugin that generates professional sponsor images by combining participant names with sponsor logos and branding. This tool was created to streamline the sponsorship recognition process for Ultra White Collar Boxing events
      Key Features:
      Dynamic image generation using PHP GD library
      Customizable templates matching Ultra brand guidelines
      Responsive design that works across various social media platforms

      My Role:
      I developed this plugin from concept to deployment, creating both the frontend form interface and backend image processing functionality. The solution involved creating custom admin pages, handling file uploads, implementing image manipulation techniques, and ensuring cross-browser compatibility.
      Technical Implementation:
      Created custom post types for sponsor management
      Implemented AJAX form submission for smooth user experience
      Developed image processing algorithms to properly size and position elements
      Ensured security through input validation and nonce verification

      Challenges:
      Maintaining image quality across different sponsor logo formats
      ➤ Solved by implementing automatic image resizing and format conversion

      Results:
      - Reduced sponsor image creation time from 10+ minutes to under 10 seconds
      - Generated over 2,000 sponsor images for UWCB events
      - Maintained consistent branding across all generated images
      - Received positive feedback from marketing teams for ease of use`,
      image: sponsorGen,
      tech: ["PHP", "Javascript", "WordPress"],
      // github:
      live: "http://localhost/ultrawhitecollarboxing_php_7_4/sponsor-generator-image/",
    },
    {
      id: 8,
      title: "QR Code Poster Generator",
      summary: "Creates custom posters with QR codes for fundraising.",
      description: `A single-page application used to generate branded fundraising posters for participants of Ultra Events, including UWCB, UMMA, UCOMEDY, and UADVENTURES. The tool allows users to input their details and instantly generate a downloadable graphic with a unique QR code linking to their personal fundraising page. 

      Key Features:
      - Dynamic QR code generation linked to individual fundraising pages
      - Auto-populated poster layout with user name, event, and charity info
      - Mobile-optimized for on-the-go poster creation
      - One-click download functionality for sharing and printing
      
      My Role: 
      I built this app from the ground up, working with Ultra's fundraising team to understand the poster requirements and automate the process. I also integrated it with internal data sources to streamline user access.
      
      Challenges:
      - Generating high-quality, branded images dynamically  
        ➤ Solved using server-side image rendering with PHP and custom layouts.
      - Ensuring QR code accuracy and readability on all devices  
        ➤ Integrated QR libraries and tested across multiple resolutions and environments.
      
      Results:
      - Boosted visibility and fundraising engagement for hundreds of participants
      - Removed the need for manual poster creation
      - Used consistently across multiple Ultra Events brands`,
      image: qr,
      tech: ["PHP", "JavaScript", "Bootstrap", "HTML"],
      github: "https://github.com/Jbreets/qr-code",
      live: "https://poster.ultraevents.co/"
    },
    {
      id: 9,
      title: "Charity Total Display",
      summary: "Live data dashboard for team fundraising morale.",
      description: `An internal dashboard used at Ultra HQ to display live fundraising totals across all brands and events. Pulls real-time data from internal CRMs and external charity APIs to provide accurate and motivational stats for staff. 

      Key Features:
      - Live API integration with multiple charity platforms
      - Custom visual display for running totals and performance
      - Auto-refresh and animation for live updating on wall monitors
      - Minimalist design focused on team morale and transparency
      
      My Role: I designed and developed the display from concept to production, with an emphasis on readability, accuracy, and low-latency updates. I handled the integration with internal tools and REST APIs from charity partners.
      
      Challenges:
      - Merging data from inconsistent API formats  
        ➤ Built a custom data normalizer in PHP to unify external sources.
      - Ensuring real-time updates without degrading performance  
        ➤ Used timed polling and client-side rendering with minimal backend load.
      
      Results:
      - Actively displayed in the Ultra office across multiple screens
      - Motivation for those working within the Ultra Events team
      - Clear and consistent benchmark of distance to company goals and records`,
      image: totals,
      tech: ["PHP", "JavaScript", "API", "HTML"],
      github: "https://github.com/Jbreets/overall-board",
      live: "https://ultradev.co.uk/sites/overall-board/"
    },
    {
      id: 10,
      title: "C# simple Calculator",
      summary: "A simple console calculator used as a tool to learn C#",
      description: `A beginner-friendly console application built to perform basic arithmetic operations interactively. Designed as a learning project while studying C# and .NET fundamentals, the app prompts users for input and processes calculations based on selected operations.

      Key Features:
      - Command-line interface for user input and results
      - Input validation using TryParse for error handling
      - Support for +, -, *, / operations with clean method-based logic
      - Looping structure for multiple consecutive calculations
      - Separate method for FizzBuzz from 1 to 100

      My Role: I built the entire application as a solo learning project to reinforce my understanding of C# syntax, control structures, method calls, and error handling patterns. I focused on writing clean, readable code with proper flow control and user feedback.

      Challenges:
      - Managing invalid user input without crashing  
        ➤ Solved using TryParse and looped prompts for better resilience
      - Structuring logic cleanly across files  
        ➤ Separated arithmetic functions into a dedicated Calculator class for clarity

      Results:
      - Reinforced core concepts of C# such as static methods, loops, switch cases, and console interaction
      - A working and reusable console utility that's easy to extend or modify
      - Solid foundation for moving into object-oriented programming and .NET applications`,
      image: csharpCalculator,
      tech: ["C#", ".Net"],
      github: "https://github.com/Jbreets/learning-csharp/tree/main/Project%201/ConsoleCalculator"
    },
    {
      id: 11,
      title: "C# Employee Management System",
      summary: "A basic console-based CRUD application to manage employee records.",
      description: `A foundational C# console project designed to manage employee data in memory. Created as a follow-up to a simple calculator project, this app reinforces object-oriented principles and interaction-driven programming through a command-line interface.
    
      Key Features:
      - In-memory employee management using List<Employee>
      - Add, view, search, update, and delete employees by ID
      - Interactive command-line menu and input prompts
      - Basic validation using TryParse and switch-case logic
      - Modular code with separation of concerns (Options class, Employee store)
    
      My Role: I designed and built the project from scratch to strengthen my grasp of object-oriented programming, method usage, data structures, and control flow in C#. The goal was to simulate a mini-CRUD system that mimics real-world data entry and manipulation.
    
      Challenges:
      - Ensuring accurate user input and error handling  
        ➤ Implemented TryParse and conditional checks to avoid runtime errors
      - Designing clean and maintainable code structure  
        ➤ Separated logic into multiple classes and methods for clarity and reuse
    
      Results:
      - Demonstrated key programming patterns like encapsulation, input validation, and list management
      - Improved confidence working with user-defined types and collections in C#
      - Set the stage for moving toward persistent data storage (e.g., JSON or database) and GUI-based interfaces`,
      image: employeeManagerApp,
      tech: ["C#", ".NET"],
      github: "https://github.com/Jbreets/learning-csharp/tree/main/Project%202/EmployeeManagement"
    },
    {
      id: 12,
      title: "C# To-do application",
      summary: "🚧 CURRENTLY UNDERWAY - C# terminal to do list that covers advanced aspects and features of csharp",
      description:`A C# To-do list application that supports all basic CRUD features along with taking advantage of more advanced csharp features such as LINQ and generics in order to aquire a greater understanding of the csharp fundamentals `,
      image:ToDoApp,
      tech: ["C#", ".NET"],
      github: "https://github.com/Jbreets/learning-csharp/tree/main/Project%203/ToDoApp"
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