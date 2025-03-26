import React from 'react';
import { FaFileDownload, FaArrowRight } from 'react-icons/fa';
import './ResumeDownload.css';

const ResumeDownload = () => {
  const resumeFile = '/documents/your-resume.pdf';
  
  return (
    <div className="resume-download-card">
      <div className="resume-text">
        <h3>Professional Resume</h3>
        <p>Download my full CV with detailed experience and skills</p>
      </div>
      <a 
        href={resumeFile} 
        download="YourName-Resume.pdf"
        className="download-button"
        aria-label="Download resume PDF"
      >
        <span>Download Resume</span>
        <FaFileDownload className="icon-download" />
        <FaArrowRight className="icon-arrow" />
      </a>
    </div>
  );
};

export default ResumeDownload;