import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Resume from "./assets/CSResume2025.pdf";

const ResumePage = () => (
    <section id="resume-page" className="home transition-fade">
        <embed src={Resume} width="100%" height ="700px"/>
    </section>
);

export default ResumePage;