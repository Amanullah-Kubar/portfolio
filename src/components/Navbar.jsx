import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Amanullah</div>
        <div className="tiltedDiv"></div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Skills</a></li>
          <li><a href="#services">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}
