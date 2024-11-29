import React from  'react';
import abtPicture from './assets/abt-pic.jpg';
import './About.css';

const About = () => (
    <section className="about transition-fade">
        <div className="about-container">
            <div className="right-container">
                <img className="abt-img" src={abtPicture} alt="about-picture" />
            </div>
            <div className="left-container">
                <h2 className="abt-title">About me!</h2>
                <p>Hi, My name is Antonio Mendoza. I am Computer Science student at the University of Georgia 
                    expectted to graduate in December 2024. I'm passionate about solving complex problems and 
                    finding new solutionsin software engineering, web development, and full-stack development.
                    As a first generation student, my drive for success has pushed me to persevere throughout
                    my college career.
                    <br></br>
                    <br></br>
                    Over the years I have had the chance to hone in on my skills in programming languages like Java,
                    JavaScript, Python, and C. My experience has even extended to Cybersecurity at Zivaro. During my 
                    internship, I worked with tools like SPLUNK and SentinelOne to enhance system security and 
                    prevent potential threats to client systems. 
                    <br></br>
                    <br></br>
                    Currently, I'm cunducting a menored study with Professor Jaewoo Lee. The purpose of this research
                    was to look at how convolutional nueral neworks can have gradient exploited by Deep Leakage attacks.
                    The challenge from this research was learning how to use Pytorch and TensorFlow to replicate the attack
                    and figuring out how to better protect data from being exploited.
                    <br></br>
                    <br></br>
                    Outside of coding, I enjoy playing live music with my band, gardening, and lifting weights.
                </p>
            </div>
        </div>
    </section>
);

export default About;