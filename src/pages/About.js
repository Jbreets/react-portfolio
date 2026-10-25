import React from 'react';
import ResumeDownload from '../components/ResumeDownload';
import AboutMe from '../components/images/profile.jpg'
import './About.css';

const About = () => {
  return (
    <div className="page-content">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-text fade-in">
        <p>
          Hi, I’m Jack Breeton, a Software and Web Developer based in Nottingham with over five years of experience building and improving e-commerce platforms. I enjoy turning ideas into practical, reliable features and seeing them used by real customers.
        </p>
        <p>
          My journey began as a hobby, tinkering with HTML and CSS, and grew into a career through an apprenticeship at Ultra Events, where I built ticketing sites and internal tools. Today I’m a Web Developer at Marks Electrical, where I work on order tracking, user accounts, smart search, category pages and the homepage, alongside GA4 and Meta tracking, Klaviyo email automation and SEO. You can explore my earlier builds on my <a href="/projects">projects page</a>.
        </p>
        <p>
          I’m passionate about AI-assisted engineering. I build Claude agents and skills to automate development workflows, link Claude to tools like Jira through MCP, and use AI to generate unit tests, while keeping code review and GDPR considerations at the centre of how I work.
        </p>
        <p>
          Outside of coding, you’ll find me at the gym, hiking, travelling with friends, or hunting down great food spots. I’m always open to new challenges and collaborations, so let’s build something great together!
        </p>

          <p>
          <ResumeDownload/>
          </p>
        </div>
        <div className="about-image fade-in">
          <img
            src={AboutMe} // Replace with your image URL
            alt="Portrait of Jack Breeton"
          />
        </div>
      </div>
    </div>
  );
};

export default About;