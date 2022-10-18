import React from 'react';
import './aboutStyling.css'
import AboutHeader from "./aboutComponents/aboutHeader";
import AboutBody from "./aboutComponents/aboutBody";

const AboutMe = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">
                <AboutHeader/>
            </h1>
            <h3 className="about-body">
                <AboutBody/>
            </h3>
        </div>
    );
};

export default AboutMe;