import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes }  from 'react-icons/fa';
import './Nav.css';

const Nav = () => {
    const [isMobile, setISMobile] = useState(false);

    return (
    <nav className="nav">
        <h1 className="nav-logo"><Link to="/">Antonios Website</Link></h1>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setISMobile(false)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Experience</Link></li>
            <li className="contact-btn"><Link to="/contact">Contact</Link></li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setISMobile(!isMobile)}>
            {isMobile ? <FaTimes /> : <FaBars />}
        </button>
    </nav>
    );
};

export default Nav;