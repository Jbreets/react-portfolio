import React from 'react';
import { Link } from 'react-router-dom';
import EducationTimeline from '../components/EducationTimeline';
import profile from '../components/images/profile.jpg';
import './Home.css';

const stats = [
  { value: '5+', label: 'years in professional development' },
  { value: 'Full stack', label: 'PHP, React & Python, front to back end' },
  { value: 'Claude', label: 'agents, skills & MCP' },
  { value: 'GDPR', label: 'aware, review-led engineering' },
];

const featured = [
  { tag: 'Marks Electrical', title: 'Order tracking', text: 'Shows customers exactly where their delivery is.', result: 'significantly fewer customer service calls.' },
  { tag: 'Marks Electrical', title: 'Smart search refactor', text: 'Faster, clearer product filtering across the catalogue.' },
  { tag: 'Ultra Events', title: 'Ultra Games Scoreboard', text: 'Live leaderboard used at Ultra Games events.' },
];

const experience = [
  { dates: 'Sept 2025 – Present', title: 'Web Developer · Marks Electrical', text: 'Customer-facing features, GA4 and Meta tracking, Klaviyo automation, SEO and Claude-powered workflows.' },
  { dates: 'Apr 2021 – Aug 2025', title: 'Junior / Assistant Web Developer · Ultra Events', text: 'Ticketing sites, internal tools and event web applications.' },
];

const stack = ['PHP', 'JavaScript', 'React', 'Python', 'MySQL', 'GA4', 'Klaviyo', 'Claude Code', 'MCP + Jira', 'Git', 'AWS CodeCommit', 'Agile / Scrum'];

const Home = () => (
  <div className="page-content home fade-in">
    <section className="hero">
      <div className="ring"><img src={profile} alt="Portrait of Jack Breeton" /></div>
      <div className="hero-copy">
        <span className="eyebrow">Software & Web Developer · Nottingham</span>
        <h1>Hi, I’m <span className="grad">Jack Breeton</span></h1>
        <p className="lead">I build and improve e-commerce platforms people actually enjoy using, from order tracking and smart search to analytics, integrations and AI-assisted workflows.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/projects">View projects</Link>
          <a className="btn" href="mailto:jackbreeton@gmail.com">Get in touch</a>
        </div>
      </div>
    </section>

    <section className="stats">
      {stats.map((s) => (<div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>))}
    </section>

    <section className="sec">
      <div className="sec-head"><h2>Featured work</h2><Link className="btn" to="/projects">All projects</Link></div>
      <div className="grid">
        {featured.map((f) => (
          <div className="card" key={f.title}>
            <span className="tag">{f.tag}</span><h3>{f.title}</h3><p>{f.text}</p>
            {f.result && <p className="res"><b>Result:</b> {f.result}</p>}
          </div>
        ))}
      </div>
    </section>

    <section className="sec">
      <h2>Experience</h2>
      <div className="tl">
        {experience.map((e) => (
          <div className="tl-item" key={e.title}><small>{e.dates}</small><h3>{e.title}</h3><p>{e.text}</p></div>
        ))}
      </div>
    </section>

    <EducationTimeline />

    <section className="sec">
      <h2>Tech stack</h2>
      <div className="chips">{stack.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
    </section>
  </div>
);

export default Home;
