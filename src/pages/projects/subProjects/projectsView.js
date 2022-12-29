import React from 'react';
import '../projectsStyling.css';
import {ProjectPageGrabber} from "./utility/projectPageGrabber";
import {Button, Card} from "react-bootstrap";


const ProjectsView = (props) => {
    const projectTitle = props.selectedProject;

    const project = ProjectPageGrabber.find(project => project.title === projectTitle);
    const images = project.imageSet;

    return (
        <Card>
            {project && (
                <div key={project.id}>
                    <div className="interior-project-page-view">
                        <div className="project-view-header">
                            <h1>{project.title}</h1>
                        </div>
                        <div className="project-view-header-exit">
                            <Button className="exit-button" title='Exit'>
                                <b>
                                    X
                                </b>
                            </Button>
                        </div>
                        <div className="project-view-images">
                            {images.map(image => (
                                <img className="project-image" key={image.id} src={image.image} alt='game'/>
                            ))}
                        </div>
                        <div className="project-view-description">
                            <p>{project.description}</p>
                        </div>
                        <div className
                                 ="project-view-description">
                            <p>{project.description}</p>
                        </div>
                        <div className="project-view-itch" dangerouslySetInnerHTML={{__html: project.itchLink}}/>
                    </div>
                </div>
            )}
        </Card>
    );
};

export default ProjectsView;
