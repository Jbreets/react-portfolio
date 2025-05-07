import React from 'react';
import './EducationTimeline.css';

const EducationTimeline = () => {
  const educationData = [
    {
      id: 1,
      year: "2021 - 2022",
      institution: "EMA Training",
      degree: "BCS Level 3 Certificate in Programming",
      description: "The software developer apprenticeship I undertook for/with Ultra Events",
      icon: "🎓",
      skills: ["Problem Solving", "Data structures and algorithms"],
      logo: ""
    },
    {
      id: 2,
      year: "2021 - Present",
      institution: "Code Academy",
      degree: "Full Stack Certification",
      description: "Completed 300+ hours of intensive programming training including JS HTML CSS PHP and SQL courses",
      icon: "💻",
      skills: ["JavaScript", "HTML", "CSS", "SQL", "Python", "PHP", "Node JS"],
      logo: ""
    },
    {
      id: 3,
      year: "2018 - 2020",
      institution: "Nottingham college",
      degree: "Level 3 Television and Film",
      description: "Completed before pivoting to a more technical field, but aided in ability to use new software and apply a creative approach",
      icon: "📷",
      skills: ["Creativity", "Independance"],
      logo: ""
    },
    {
      id: 4,
      year: "2013 - 2018",
      institution: "Secondary School",
      degree: "2 A's in English and Maths and 6 B's achieved in all other Grades",
      description: "Achieved A grades in both English and Mathematics",
      icon: "📚",
      skills: ["Maths", "English", "IT"],
      logo: ""
    }
  ];

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">My Education Journey</h2>
      <div className="modern-timeline">
        {educationData.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Arrow divider (except before first item) */}
            {index > 0 && (
              <div className="timeline-arrow" data-aos="fade-up">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
            )}
  
            <div className="timeline-item" data-aos="fade-up">
              {/* Left Panel - Structured Data */}
              <div className="timeline-data">
                <span className="timeline-year">{item.year}</span>
                <span className="timeline-icon">{item.icon}</span>
                <h3 className="timeline-institution">{item.institution}</h3>
                <h4 className="timeline-degree">{item.degree}</h4>
              </div>
  
              {/* Right Panel - Freeform Description */}
              <div className="timeline-description">
                <p>{item.description}</p>
                
                {/* Optional Extras */}
                {item.skills && (
                  <div className="skills-list">
                    {item.skills.map(skill => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;