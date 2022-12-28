import React from 'react';
import './projectsStyling.css';
import {ProjectGrabber} from "./components/projectGrabber";


const ProjectsPage = (props) => {

    // Use a switch statement to determine which class to apply based on the value of prevComponent
    let classToUse;

    if (props.originalVariable === 'about') {
        classToUse = 'right-projects-body';
    } else if (props.originalVariable === 'contact') {
        classToUse = 'left-projects-body';
    } else if (props.originalVariable === 'projects') {
        classToUse = 'projects-body';
    } else if (props.originalVariable === null && props.prevComponent === 'projects') {
        classToUse = 'right-projects-body';
    } else {
        classToUse = 'projects-body';
    }

    return (
        <div className={classToUse}>
            <h1 className="projects-header">
                Check out my Projects
            </h1>
            <div className="cards-container">
                {ProjectGrabber.map(project => (
                    <div className="game-card" key={project.id}>
                        <img src={project.image} alt={project.title}></img>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;
