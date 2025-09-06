import React from "react";
import "./Home.css";

const ResumePage = () => (
    <section id="resume-page" className="home transition-fade">
        <embed src={`${process.env.PUBLIC_URL}/CSResume2025.pdf`} width="100%" height ="700px" type="application/pdf"/>
    </section>
);

export default ResumePage;