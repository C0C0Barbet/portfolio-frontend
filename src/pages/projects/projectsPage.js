import React from 'react';
import './projectsStyling.css';
import {ProjectGrabber} from "./components/projectGrabber";


const ProjectsPage = () => {

    return (
        <div className="projects-body">
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
