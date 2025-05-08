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
          Hi, I’m Jack Breeton — a reliable and driven Junior Web Developer with a solid foundation in full-stack development. I’m passionate about building intuitive applications, solving real-world problems, and continuously growing my skill set.
        </p>
        <p>
          My journey began as a hobby, tinkering with HTML and CSS, and quickly evolved into a career as I picked up languages like Python, JavaScript, and PHP. I enjoy turning ideas into practical tools and have built several small projects that support both my personal and professional life. You can explore them on my <a href="https://jack-breeton-portfolio.vercel.app/projects">projects page</a>. I'm also experienced with Git and love collaborating to bring ideas to life.
        </p>
        <p>
          Currently, I work as a Web Development Assistant, gaining hands-on experience with real projects. I'm focused on taking on more complex builds, working within larger teams, and staying involved from design through to deployment and beyond.
        </p>
        <p>
          Outside of coding, you’ll find me at the gym, hiking, traveling with friends, or hunting down great food spots — all of which keep me inspired. I’m always open to new challenges and collaborations, so let’s build something great together!
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