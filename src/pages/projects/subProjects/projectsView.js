import React, {useState} from 'react';
import '../projectsStyling.css';
import {ProjectPageGrabber} from "./utility/projectPageGrabber";
import {Button, Card} from "react-bootstrap";
import ProjectPageImages from "./utility/projectPageImages";
import ProjectSelectedPhoto from "./utility/projectSelectedPhoto";


const ProjectsView = (props) => {
    const [isMobile] = useState(window.innerWidth <= 576);

    const handleOpenProject = props.handleOpenProject;

    const [selectedImage, setSelectedImage] = useState(null);

    const projectTitle = props.selectedProject;

    const project = ProjectPageGrabber.find(project => project.title === projectTitle);
    const images = project.imageSet;

    if (selectedImage === null) {
        setSelectedImage(images.at(0));
    }
    return (
        <>
            {isMobile ? (
                <Card>
                    <div className="project-view-itch" dangerouslySetInnerHTML={{__html: project.itchLink}}/>
                </Card>
            ) : (
                <Card className="interior-project-page-view" key={project.id}>
                    <Card className="project-view-header">
                        <h1 className="project-view-header-title">
                            <b>
                                {project.title}
                            </b>
                        </h1>
                        <div className="project-view-header-exit">
                            <Button className="exit-button" title='Exit'
                                    onClick={() => handleOpenProject(project.title)}>
                                <b>
                                    X
                                </b>
                            </Button>
                        </div>
                    </Card>

                    <Card className="project-view-images">
                        <ProjectPageImages images={images} setSelectedImage={setSelectedImage}/>
                        <ProjectSelectedPhoto image={selectedImage}/>
                    </Card>
                    <Card className="project-view-description">
                        <h4 className="project-view-description-header">
                            A little background
                        </h4>
                        <p className="project-view-description-text">
                            {project.description}
                        </p>
                    </Card>
                    <div className="project-view-itch" dangerouslySetInnerHTML={{__html: project.itchLink}}/>
                </Card>
            )
            }
        </>
    );
};

export default ProjectsView;
