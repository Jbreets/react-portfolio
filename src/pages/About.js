import React from 'react';
import ResumeDownload from '../components/ResumeDownload';
import './About.css';

const About = () => {
  return (
    <div className="page-content">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-text fade-in">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
            Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
            in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
            vestibulum. Maecenas imperdiet, orci in convallis tincidunt, nisl nunc tincidunt
            mi, sed vehicula sapien magna nec tellus.
          </p>
          <p>
            In a professional context, I am a passionate developer with a focus on creating
            user-friendly and efficient applications. I enjoy solving complex problems and
            continuously learning new technologies to improve my skills.
          </p>
          <p>
          <ResumeDownload/>
          </p>
        </div>
        <div className="about-image fade-in">
          <img
            src="https://via.placeholder.com/400" // Replace with your image URL
            alt="About Me"
          />
        </div>
      </div>
    </div>
  );
};

export default About;