import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom'; // or 'next/link' for Next.js

export default function NotFound() {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-box">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="notfound-link">Go Back Home</Link>
      </div>
    </div>
  );
} 