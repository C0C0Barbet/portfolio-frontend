import React from 'react';
import './aboutStyling.css'
import AboutHeader from "./aboutComponents/aboutHeader";
import AboutBody from "./aboutComponents/aboutBody";

const AboutMe = (props) => {
    console.log("prevComponent: " + props.prevComponent);
    console.log("originalVariable: " + props.originalVariable);

    let classToUse;
    switch (props.originalVariable) {
        case null:
            console.log("case: null");
            classToUse = 'initial-about-container';
            break;
        case 'about':
            console.log("case: about");
            classToUse = 'about-container';
            break;
        default:
            console.log("case: default");
            classToUse = 'subsequent-about-container';
    }

    return (
        <div className={classToUse}>
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