import React, {useEffect, useRef} from 'react';
import './aboutStyling.css'
import AboutHeader from "./aboutComponents/aboutHeader";
import AboutBody from "./aboutComponents/aboutBody";

const AboutMe = (props) => {
    const {prevComponent} = props;

    // Get the AboutMe element
    const aboutMeRef = useRef(null);

    // Use useEffect to listen for changes to prevComponent
    useEffect(() => {
        // When prevComponent changes, add the 'exit' class to trigger the exit animation
        aboutMeRef.current.classList.add('fade-and-roll-out');
    }, [prevComponent]);

    // Use a switch statement to determine which class to apply based on the value of prevComponent
    let classToUse;
    switch (props.originalVariable) {
        case null:
            classToUse = 'initial-about-container';
            break;
        case 'about':
            classToUse = 'about-container';
            break;
        default:
            classToUse = 'subsequent-about-container';
    }

    return (
        <div ref={aboutMeRef} className={classToUse}>
            <h1 className="about-title">
                <AboutHeader/>
            </h1>
            <h6 className="about-body">
                <AboutBody/>
            </h6>
        </div>
    );
};

export default AboutMe;