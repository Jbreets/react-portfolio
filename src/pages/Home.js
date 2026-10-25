import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Divider from '../components/Divider';
import EducationTimeline from '../components/EducationTimeline';
import profile from '../components/images/profile.jpg';
import './Home.css';
import { FaComments, FaUsers, FaLightbulb, FaClock, FaCogs, FaUserFriends, FaTasks } from 'react-icons/fa';

const stats = [
  { value: '5+', label: 'years in professional development' },
  { value: '110+', label: 'LeetCode problems solved' },
  { value: 'AI', label: 'Claude agents, skills & MCP' },
  { value: 'GDPR', label: 'aware, review-led engineering' },
];

const focus = [
  { title: 'Customer-facing features', text: 'Order tracking, user accounts, smart search, category pages and a redeveloped homepage for a retail e-commerce platform.' },
  { title: 'Data & integrations', text: 'GA4 and Meta API tracking, Klaviyo email automation, MySQL, and ongoing SEO and performance work.' },
  { title: 'AI-assisted engineering', text: 'Claude agents and skills, Jira linked through MCP, and AI-generated unit tests to speed up delivery.' },
];

const experience = [
  {
    role: 'Web Developer', company: 'Marks Electrical LTD', dates: 'Sept 2025 – Present',
    points: [
      'Engineered an order tracking service that accurately depicts the delivery journey, significantly reducing customer service calls.',
      'Implemented a user account area that drives sales through company account benefit schemes.',
      'Refactored the smart search tool (JavaScript/AJAX faceted filtering) and redeveloped the homepage and category pages.',
      'Built Claude agents and skills to automate development workflows, and connected Claude to Jira via MCP.',
      'Integrated GA4 and Meta API tracking and Klaviyo email automation, alongside regular SEO and database updates.',
      'Applied GDPR considerations, took part in regular code reviews and worked with buyers, marketing and data teams.',
    ],
  },
  {
    role: 'Junior / Assistant Web Developer', company: 'Ultra Events LTD', dates: 'Apr 2021 – Aug 2025',
    points: [
      'Led several small-scale web applications, including a game scoreboard, poster and QR generator and charity totals counter.',
      'Managed the creation of an e-commerce site that sold tickets for live events, creating a new income stream.',
      'Maintained and enhanced company websites and web applications across devices and browsers.',
    ],
  },
];

const stack = [
  { group: 'Languages & frameworks', items: [['PHP', '#777BB3'], ['JavaScript', '#c9a800'], ['React', '#1e9fc4'], ['Python', '#3776ab'], ['Flask', '#2f6f8f'], ['HTML5', '#e34c26'], ['CSS/Sass', '#2965f1'], ['Bootstrap', '#7952B3']] },
  { group: 'AI & automation', items: [['Claude Code', '#d97757'], ['Agents', '#d97757'], ['Skills', '#d97757'], ['MCP + Jira', '#d97757']] },
  { group: 'Data & marketing tech', items: [['SQL / MySQL', '#00618a'], ['GA4', '#e8710a'], ['Meta API', '#1877f2'], ['Klaviyo', '#2b2b2b'], ['SEO', '#2e8b57']] },
  { group: 'Engineering practice', items: [['Git', '#f34f29'], ['AWS CodeCommit', '#c47f00'], ['Code review', '#4c6ef5'], ['Unit testing', '#4c6ef5'], ['Agile / Scrum', '#4c6ef5']] },
];

const personalSkills = [
  { name: 'Communication', icon: <FaComments /> },
  { name: 'Teamwork', icon: <FaUsers /> },
  { name: 'Problem Solving', icon: <FaCogs /> },
  { name: 'Adaptability', icon: <FaUserFriends /> },
  { name: 'Creativity', icon: <FaLightbulb /> },
  { name: 'Time Management', icon: <FaClock /> },
  { name: 'Independence', icon: <FaTasks /> },
];

const Home = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="page-content home fade-in">
      <section className="hero">
        <div className="hero-photo">
          <img src={profile} alt="Portrait of Jack Breeton" />
        </div>
        <div className="hero-copy">
          <span className="eyebrow">Software & Web Developer · Nottingham, UK</span>
          <h1>Hi, I’m Jack Breeton</h1>
          <p className="tagline">I build and improve e-commerce platforms people actually enjoy using.</p>
          <p className="intro">
            Over five years of professional development across PHP, JavaScript, React and Python, from order tracking and
            smart search to analytics, API integrations and AI-assisted workflows.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">View my projects</Link>
            <Link className="btn" to="/about">About me</Link>
            <a className="btn" href="mailto:jackbreeton@gmail.com">Get in touch</a>
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
        ))}
      </section>

      <section className="focus-grid">
        {focus.map((f) => (
          <div className="card" key={f.title}><h3>{f.title}</h3><p>{f.text}</p></div>
        ))}
      </section>

      <Divider color="#3a86ff" spacing="4rem" thickness="3px" animate={true} />

      <section className="experience">
        <h2>Experience</h2>
        <div className="exp-list">
          {experience.map((e) => (
            <div className="exp-item card" key={e.company}>
              <div className="exp-head">
                <div><h3>{e.role}</h3><span className="company">{e.company}</span></div>
                <span className="dates">{e.dates}</span>
              </div>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <Divider color="#3a86ff" spacing="4rem" thickness="3px" animate={true} />

      <EducationTimeline />

      <Divider color="#3a86ff" spacing="4rem" thickness="3px" animate={true} />

      <section className="skills-cloud-section">
        <h2>My Tech Stack</h2>
        {stack.map((g) => (
          <div className="stack-group" key={g.group}>
            <h4>{g.group}</h4>
            <div className="skills-cloud">
              {g.items.map(([name, color]) => (
                <div
                  key={name}
                  className={`skill-tag ${hovered === name ? 'hovered' : ''}`}
                  style={{ backgroundColor: color, color: '#fff' }}
                  onMouseEnter={() => setHovered(name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="skills-cloud-section">
        <h2>Personal Skills</h2>
        <div className="personal-skills-list">
          {personalSkills.map((s) => (
            <div key={s.name} className="personal-skill-badge">{s.icon}<span>{s.name}</span></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
