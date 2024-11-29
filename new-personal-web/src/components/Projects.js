import React from 'react';
import TimelineComponent from './Timeline';
import './Projects.css';
import github from './assets/github.png';
import uga from './assets/uga.png'
import levelupFitnessLogo from './assets/LevelUp-Fitness-square.png'
import splunkLogo from './assets/splunk-logo.webp'
import defaultImg from './assets/Personal-web-picture.png';
import bdbLogo from './assets/BulldogBuddies-square.png';
import chessLogo from './assets/chess-game.jpeg';
import terminalImg from './assets/terminal-project.jpeg';

const Projects = () => {

    const projects = [
        {
            title: 'Deep Leakage From Gradients',
            img: uga,
            language: 'Langauge: Python',
            libraries: 'Libraries: PyTorch, TensorFlow, TorchVision, Numpy, and Matplotlib',
            description: "Simulated a gradient inversion attack on the CIFAR-10 dataset. Used ResNet-18 architecture to carry out the attack and observe the beahvior of gatehring gradient information. The challenge of this project was learning how to use PyTorch and TensorFlow to replicate the attack. This project introduced me to the basics of deep learning and how to use PyTorch and TensorFlow.",
            link:'https://github.com/amendoza09/gradient_inversion_attack',
        },
        {
            title: 'LevelUp Fitness',
            img: levelupFitnessLogo,
            language: 'Langauge: JavaScript',
            libraries:'Tools: React, Node.JS, MongoDB',
            description: 'Users can create an account and track their progress on their fitness journey and share workouts for other users to see. As you wokrout, you can level up your charcter and unlock stronger ones as you progress in your personal journey. The challenge of this project was designing the UI to make it easy to naviagte along with tracking user progress. Another challenge was fetching each uploaded workout and displaying it on a feed page for users to see.',
            link: 'https://github.com/oscarg111/Web-Programming-Project',
        },
        {
            title: 'Splunk Dashbaord',
            img: splunkLogo,
            language: '',
            libraries:'Tools: Splunk',
            description: 'During my Internship at Zivaro, I was assigned to create a dashboard to visualize activity over the DuoAuthenticiation application. My dashboard allowed for easy monitoring of any failed attempts and even attempts form foreign countries that are recorded on the Zivaro servers. This was done by creatng a heat map with extracted user IP addresses to show where activity is coming from. The challenging part of this project was finding a way to organize the dashboard to provide the most information without cluttering the UI.',
            link: '',
        },
        {
            title: 'Bulldog Buddies',
            img: bdbLogo,
            language: 'Langauge: JavaScript',
            libraries:'Tools: React, Node.JS, Google Firebase',
            description: 'Students at UGA can create an account and upload events to Bulldog Buddies. Our RSVP system allows for users to see how many people will be attending their event as well as other events posted by students. The challenge of this project was designing the backend to attach events to the specific user and creating a system that made it easy for the developers to pull information from the database and display on the frontend.',
            link: 'https://github.com/rishivandhan/BullDogBuddies',
            externalLink: 'https://rishivandhan.github.io/BullDogBuddies/',
            linkName: 'Visit Website'
        },
        {
            title: 'Command Shell',
            img: terminalImg,
            language: 'Langauge: C',
            libraries:'',
            description: 'Low Level I/O system that allows for basic commands to be executed. The challenge of this project was learning how to use system calls to execute commands and handling errors that may occur when executing commands.',
            link: 'https://github.com/amendoza09/Command_Shell_in_C',
        },
        {
            title: 'Chess Game',
            img: chessLogo,
            language: 'Langauge: Python',
            libraries:'Libraries: PyGame',
            description: 'A simple chess game that allows two players to play against each other. The challenge of this project was learning how to use PyGame to create the game and how to implement the rules of chess. Another challenge was to have the game know when there is a checkmate or stalemate.',
            link: 'https://github.com/amendoza09/Chess',
        },
        {
            title: 'Personal Website',
            img: defaultImg,
            language: 'Langauge: JavaScript',
            libraries:'Libraries: React',
            description: 'This personal website allows for me to showcase my projects and experiences. The challenge of this project was learning how to create a dynamic UI that is easy to navigate and showcases my projects and experiences in a clean, fun, and professional manner.',
            link: 'https://github.com/amendoza09/Personal-Website-renewed',
        },
    ];

    return (
    <section className="projects transition-fade">
        <h2 className="pg-title">My Projects & Experience</h2>
        <div className="experience-skills-container">
            <div className="experience-container">
                <h2>Experience</h2>
                <TimelineComponent />
            </div>
            <div className="skills-container">
                <div className="hard-skills">
                    <h2>Coding Skills</h2>
                    <div className="coding-skills">
                        <ul className="coding-list">
                            <li className="skill-js">JavaScript</li>
                            <li className="skill-py">Python</li>
                            <li className="skill-java">Java</li>
                            <li className="skill-sql">SQL</li>
                            <li className="skill-c">C</li>
                            <li className="skill-html">HTML/CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>  
        <h2 className="proj-title">My Projects</h2>
        <div className="carousel-container">
            <div className="project-carousel">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="proj-title">{project.title}</h3>
                        <div className="image-container"> 
                            <img className="proj-image" src={project.img} alt="project picture"/>
                            <div className="proj-description">
                                <p>{project.language}</p>
                                <p>{project.libraries}</p>
                                <p>{project.description}</p>
                            </div>
                        </div>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={github} className="logo" alt="github-logo"/>
                            </a>
                        )}
                        {project.externalLink && (
                                <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                                    <button className="external-link">{project.linkName}</button>
                                </a>
                            )}
                    </div> 
                ))}
            </div>
        </div>
    </section>
    );
};

export default Projects;