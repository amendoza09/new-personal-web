import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
    <nav className="nav">
        <h1 className="nav-logo"><Link to="/">Antonios Website</Link></h1>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Experience</Link></li>
            <li className="contact-btn"><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
);

export default Nav;