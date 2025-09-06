import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumePage from './components/ResumePage';
import './App.css';
import './media-queries.css';

function AnimatedRoutes() {
  const location = useLocation(); // Get the current location

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname} // Use location.pathname for unique key
        timeout={800} // Transition duration
        classNames="fade" // Class name for transition
      >
        <Routes location={location}> {/* Pass location here */}
          <Route path="/" element={<Home />} />
          <Route path="/ResumePage" element={<ResumePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <div>
        <AnimatedRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;