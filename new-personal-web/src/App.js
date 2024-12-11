import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <Router>
      <Nav />
      <div className="container">
      <TransitionGroup>
          <CSSTransition
            timeout={800} // The duration of the transition
            classNames="fade" // The class name prefix for the transition
            key={window.location.pathname} // The key for each route (page)
          >
            <Routes location={window.location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
