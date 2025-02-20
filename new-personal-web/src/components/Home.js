import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import headshot from './assets/profile-pic.jpg';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import resume from './assets/CSResume2025.pdf';

const openResume = () => {
    window.open(resume, "_blank");
};

const Home = () => (

    <section id="home-section" className="home transition-fade">
        <div className="home-container">
            <div className="right-side">
                <img className="headshot" src={headshot} alt="Toni's headshot" />
            </div>
            <div className="left-side">
                <h3>Hello my name</h3>
                <h1 className="my-name">Antonio Mendoza</h1>
                <h3>Computer Science Student at University of Georgia</h3>
                <div className="btns">
                    <button className="link-btn" onClick={openResume}>View CV</button>
                    <button className="link-btn"><Link to="/contact">Contact Me</Link></button>
                </div>
                <div>
                    <a href="https://github.com/amendoza09" target="_blank"><img className="logo" src={github} alt="github button"/></a>
                    <a href="https://linkedin.com/in/antonio-mendoza01/" target="_blank"><img className="logo" src={linkedin} alt="linkedin button"/></a>
                </div>
            </div>
        </div>
    </section>
);

export default Home;