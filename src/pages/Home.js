import React, { useState } from 'react';
import Divider from '../components/Divider';
import EducationTimeline from '../components/EducationTimeline';
import './Home.css';
import { FaComments, FaUsers, FaLightbulb, FaClock, FaCogs, FaUserFriends, FaTasks } from 'react-icons/fa';



const Home = () => {
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS/Sass', level: 85 },
    { name: 'PHP', level: 75 },
    { name: 'JavaScript', level: 65 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 65 },
    { name: 'Git', level: 70 }
  ];

  const personalSkills = [
    { name: 'Communication', icon: <FaComments /> },
    { name: 'Teamwork', icon: <FaUsers /> },
    { name: 'Problem Solving', icon: <FaCogs /> },
    { name: 'Adaptability', icon: <FaUserFriends /> },
    { name: 'Creativity', icon: <FaLightbulb /> },
    { name: 'Time Management', icon: <FaClock /> },
    { name: 'Independance', icon: <FaTasks /> }
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="page-content fade-in">
      <div className="hero-section">
        <h1>Hi, I'm Jack Breeton</h1>
        <p className="tagline">
          Full Stack Web Developer | Problem Solver
        </p>
        <p className="intro">
          Welcome to my personal website where I display my achievements and skills I have learnt throughout the years.
        </p>
      </div>

      <Divider 
        color="#3a86ff" 
        spacing="5rem" 
        thickness='3px'
        animate={true}
      />

      <EducationTimeline />    

      <Divider 
        color="#3a86ff" 
        spacing="5rem" 
        thickness='3px'
        animate={true}
      />

      <div className="skills-cloud-section">
        <h2>My Tech Stack</h2>
        <div className="skills-cloud">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`skill-tag ${hoveredSkill === skill.name ? 'hovered' : ''}`}
              style={{
                '--size': `${Math.max(14, skill.level * 0.3)}px`,
                '--opacity': `${skill.level / 100}`,
                '--hue': `${skill.level * 1.2}`
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {skill.name}
              {hoveredSkill === skill.name && (
                <span className="skill-level">{skill.level}%</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Divider 
        color="#3a86ff" 
        spacing="3rem" 
        thickness='2px'
        animate={true}
      />
      <div className="skills-cloud-section">
        <h2>Personal Skills</h2>
        <div className="personal-skills-list">
          {personalSkills.map(skill => (
            <div key={skill.name} className="personal-skill-badge">
              {skill.icon} <span style={{ marginLeft: '0.5rem' }}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
