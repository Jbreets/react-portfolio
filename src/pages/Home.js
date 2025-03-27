// import React from 'react';
// 
// const Home = () => {
//   return (
//     <div className="page-content">
//       <h1>Hi my name is Jack Breeton, welcome to My Portfolio</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
//         pulvinar facilisis justo mollis, auctor consequat urna.
//       </p>
//     </div>
//   );
// };
// 
// export default Home;

import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  // Skill data with weights (adjust values for visual hierarchy)
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS/Sass', level: 85 },
    { name: 'PHP', level: 75 },
    { name: 'JavaScript', level: 65 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 65 },
    { name: 'Git', level: 60 }
  ];

  // State for hover effect
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="page-content fade-in">
      <div className="hero-section">
        <h1>Hi, I'm Jack Breeton</h1>
        <p className="tagline">
          Full stack web Developer | Problem Solver
        </p>
        <p className="intro">
          I build responsive, accessible web applications with modern technologies.
          Currently specializing in React ecosystems.
        </p>
      </div>

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
    </div>
  );
};

export default Home;