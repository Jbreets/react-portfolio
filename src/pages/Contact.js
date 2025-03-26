import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission (replace with FormSubmit or your backend)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="page-content fade-in">
      <h1>Get In Touch</h1>
      
      <div className="contact-container">
        {/* Contact Info Section */}
        <div className="contact-info fade-in">
          <h2>Contact Information</h2>
          <p>
            <i className="fas fa-envelope"></i> Email: 
            <a href="mailto:example@email.com">example@email.com</a>
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone: 
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
          <p>
            <i className="fab fa-linkedin"></i> LinkedIn: 
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/yourprofile
            </a>
          </p>
          <p>
            <i className="fab fa-github"></i> GitHub: 
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              github.com/yourusername
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form 
          action="https://formsubmit.co/jackbreeton@gmail.com" 
          method="POST"
          className="contact-form fade-in"
          onSubmit={() => setIsSubmitted(true)}
        >
          {/* FormSubmit Config (Hidden Fields) */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://yourportfolio.com/thank-you" />
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
          {isSubmitted && (
            <p className="success-message">Thank you! Your message has been sent.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;