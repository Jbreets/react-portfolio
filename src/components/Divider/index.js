import React from 'react';
import './Divider.css';

const Divider = ({ 
  type = "line", 
  thickness = "1px",
  color = "var(--accent-primary)", 
  width = "80%",
  spacing = "2rem",
  animate = true 
}) => {
  const renderDivider = () => {
    switch(type) {
      case "dotted":
        return (
          <div 
            className={`divider-base ${animate ? 'animate-pulse' : ''}`}
            style={{
              '--divider-color': color,
              '--divider-thickness': thickness,
              '--divider-width': width,
              '--divider-spacing': spacing
            }}
          >
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        );
      
      case "angled":
        return (
          <div 
            className="divider-angled"
            style={{
              '--divider-color': color,
              '--divider-height': thickness,
              '--divider-spacing': spacing
            }}
          ></div>
        );

      default: // line
        return (
          <div 
            className={`divider-base ${animate ? 'animate-grow' : ''}`}
            style={{
              '--divider-color': color,
              '--divider-thickness': thickness,
              '--divider-width': width,
              '--divider-spacing': spacing
            }}
          ></div>
        );
    }
  };

  return renderDivider();
};

export default Divider;