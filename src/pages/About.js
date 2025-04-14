import React from 'react';
import ResumeDownload from '../components/ResumeDownload';
import AboutMe from '../components/images/about-me.jpeg'
import './About.css';

const About = () => {
  return (
    <div className="page-content">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-text fade-in">
          <p>
          Hi, I’m Jack Breeton, a determined and reliable Junior Web Developer with a strong foundation in full-stack development. I’m passionate about building intuitive applications, solving complex problems, and continuously expanding my skill set.
          </p>
          <p>
          Outside of development, I enjoy hitting the gym, travelling with friends, hiking, and discovering great food spots. These activities fuel my creativity and problem-solving mindset, helping me bring fresh perspectives into my work.
          I’m always looking for new opportunities to collaborate and grow—let’s build something great together!
          </p>
          <p>
          <ResumeDownload/>
          </p>
        </div>
        <div className="about-image fade-in">
          <img
            src={AboutMe} // Replace with your image URL
            alt="About Me"
          />
        </div>
      </div>
    </div>
  );
};

export default About;