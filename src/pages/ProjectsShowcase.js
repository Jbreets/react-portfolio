import React, { useState } from 'react';
import { ultraTickets, ultraSites, ultraGamesScoreboard, scraper, kitTracker, pdfGen } from '../components/images';
import './ProjectsShowcase.css';

const projects = [
  { cat: 'work', tag: 'Case study · 2025–26', title: 'Order tracking service', text: 'Customers couldn’t see where deliveries were, so they called. I built a service that depicts the full delivery journey.', result: 'significantly fewer customer service calls.', tech: ['PHP', 'JavaScript', 'MySQL'] },
  { cat: 'work', tag: 'Case study · 2025–26', title: 'Smart search refactor', text: 'Refactored the JavaScript/AJAX faceted filtering so customers can find and narrow products faster.', tech: ['JavaScript', 'AJAX', 'PHP'] },
  { cat: 'work', tag: 'Case study · 2025–26', title: 'My Account area', text: 'Customer log-in and account pages that drive sales through company account benefit schemes.', tech: ['PHP', 'MySQL'] },
  { cat: 'work', tag: 'Case study · 2025–26', title: 'Homepage & category redesign', text: 'Redeveloped the homepage and restructured categories with buyers and marketing.', tech: ['HTML/CSS', 'JavaScript', 'SEO'] },
  { cat: 'work', tag: 'Case study · 2025–26', title: 'Claude agents & skills', text: 'Automated development workflows, linked Claude to Jira via MCP and generated unit tests.', tech: ['Claude Code', 'MCP', 'Jira'] },
  { cat: 'work', tag: 'Case study · 2025–26', title: 'Analytics & email automation', text: 'GA4 and Meta API tracking, analytics tags and Klaviyo-driven email generation.', tech: ['GA4', 'Meta API', 'Klaviyo'] },
  { cat: 'tools', tag: 'Ultra Events', title: 'Ultra Games Scoreboard', text: 'Live leaderboard web app with an admin interface, built from scratch.', tech: ['PHP', 'MySQL', 'AJAX'], image: ultraGamesScoreboard, links: [{ label: 'Live', url: 'https://scores.theultragames.com/' }, { label: 'GitHub', url: 'https://github.com/Jbreets/ultra-games-scoreboard' }] },
  { cat: 'tools', tag: 'Ultra Events', title: 'Kit Tracker', text: 'CRUD tool for tracking returned and missing event kit.', tech: ['PHP', 'Bootstrap'], image: kitTracker, links: [{ label: 'Live', url: 'https://ultradev.co.uk/sites/kit-tracker/' }, { label: 'GitHub', url: 'https://github.com/Jbreets/kit-tracker' }] },
  { cat: 'tools', tag: 'Ultra Events', title: 'Flask Functions', text: 'Automation tool that turns CSV files into styled PDFs and clean datasets.', tech: ['Python', 'Flask'], image: pdfGen, links: [{ label: 'Live', url: 'https://csv-to-pdf-8zt1.onrender.com/' }, { label: 'GitHub', url: 'https://github.com/Jbreets/csv-to-pdf' }] },
  { cat: 'tools', tag: 'Technical test', title: 'Tyre Scraper CLI', text: 'PHP command-line scraper that exports structured data to CSV and a database.', tech: ['PHP', 'MySQL', 'CLI'], image: scraper, links: [{ label: 'GitHub', url: 'https://github.com/Jbreets/php-scraper' }] },
  { cat: 'sites', tag: 'Ultra Events', title: 'Ultra Tickets websites', text: 'Ticketing platforms across multiple Ultra brands and regions.', tech: ['PHP', 'WordPress', 'MySQL'], image: ultraTickets, links: [{ label: 'UWCB', url: 'https://www.ultratickets.co.uk/uwcb' }, { label: 'UMMA', url: 'https://ultratickets.co/umma' }] },
  { cat: 'sites', tag: 'Ultra Events', title: 'Ultra brand sites', text: 'Responsive branded sites for boxing, MMA, comedy and adventures.', tech: ['WordPress', 'PHP'], image: ultraSites, links: [{ label: 'Ultra Events', url: 'https://ultraevents.co/' }, { label: 'UWCB', url: 'https://www.uwcb.co.uk' }, { label: 'UMMA', url: 'https://www.ultramma.co.uk' }, { label: 'UComedy', url: 'https://www.ultracomedy.co.uk' }, { label: 'UAdventures', url: 'https://www.ultraadventures.co.uk' }] },
];

const filters = [['all', 'All'], ['work', 'Marks Electrical'], ['tools', 'Tools & apps'], ['sites', 'Sites']];

const ProjectsShowcase = () => {
  const [active, setActive] = useState('all');
  const shown = projects.filter((p) => active === 'all' || p.cat === active);

  return (
    <div className="page-content fade-in showcase">
      <span className="eyebrow">Projects</span>
      <h1>Things I’ve <span className="grad">built</span></h1>
      <p className="lead">Recent commercial work first, then tools and sites from earlier roles.</p>
      <div className="filters">
        {filters.map(([id, label]) => (
          <button key={id} className={`f ${active === id ? 'on' : ''}`} onClick={() => setActive(id)}>{label}</button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => (
          <div className="card" key={p.title}>
            {p.image && <img className="thumb" src={p.image} alt={`${p.title} screenshot`} loading="lazy" />}
            <span className="tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            {p.result && <p className="res"><b>Result:</b> {p.result}</p>}
            <div className="chips">{p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
            {p.links && (
              <div className="links">
                {p.links.map((l) => <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
