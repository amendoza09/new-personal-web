import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ham_menu from './assets/hamburger.png';
import './Nav.css';

const MobileNav = () => {

  const [menuOpen, setMenuOpen] = useState(false); // State to manage the menu
 
  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="mobile-nav">
      <div onClick={toggleMenu}>
        <img
          className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
          src={ham_menu}
          alt="hamburger-icon"
        />
      </div>
      <ul className={`mobile-nav-links ${menuOpen ? 'open' : 'closed'}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={toggleMenu}>
            Experience
          </Link>
        </li>
        <li className="contact-btn">
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;