import React, {useState} from 'react';
import '../projectsStyling.css';
import {ProjectPageGrabber} from "./utility/projectPageGrabber";
import {Button} from "react-bootstrap";
import ProjectPageImages from "./utility/projectPageImages";
import ProjectSelectedPhoto from "./utility/projectSelectedPhoto";


const ProjectsView = (props) => {
    const [isMobile] = useState(window.innerWidth <= 576);


    const [selectedImage, setSelectedImage] = useState(null);

    const projectTitle = props.selectedProject;

    const project = ProjectPageGrabber.find(project => project.title === projectTitle);
    const images = project.imageSet;

    if (selectedImage === null) {
        setSelectedImage(images.at(0));
    }

    if (!isMobile) {
        return (
            <div className="interior-project-page-view" key={project.id}>
                <div className="project-view-header">
                    <h1>
                        <b>
                            {project.title}
                        </b>
                    </h1>
                </div>
                <div className="project-view-header-exit">
                    <Button className="exit-button" title='Exit'>
                        <b>
                            X
                        </b>
                    </Button>
                </div>
                {isMobile ? (
                    <div>Hello</div>
                ) : (
                    <div className="project-view-images">
                        <ProjectPageImages images={images} setSelectedImage={setSelectedImage}/>
                        <ProjectSelectedPhoto image={selectedImage}/>
                    </div>
                )}
                <div className="project-view-description">
                    <h4>
                        A little background
                    </h4>
                    <p className="project-view-description-text">
                        {project.description}
                    </p>
                </div>
                <div className="project-view-itch" dangerouslySetInnerHTML={{__html: project.itchLink}}/>
            </div>
        );
    } else {
        return (
            <div>
                <p>
                    Hello
                </p>
            </div>
        )
    }
};

export default ProjectsView;
