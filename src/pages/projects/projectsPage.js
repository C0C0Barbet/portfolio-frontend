import React, {useEffect, useRef, useState} from 'react';
import './projectsStyling.css';
import {ProjectGrabber} from "./components/projectGrabber";
import ProjectsView from "./subProjects/projectsView";


const ProjectsPage = (props) => {

    const [openProject, setOpenProject] = useState(null);

    const sectionRef = useRef(null);
    useEffect(() => {
        if (openProject) {
            sectionRef.current.scrollIntoView();
        }
    }, [openProject]);

    const handleOpenProject = (projectTitle) => {
        if (openProject === projectTitle) {
            setOpenProject(null);
        } else {
            setOpenProject(projectTitle);
        }
    };

    let classToUse;

    if (props.originalVariable === 'about') {
        classToUse = 'right-projects-body';
    } else if (props.originalVariable === 'contact') {
        classToUse = 'left-projects-body';
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
                    <div>
                        <div
                            className="game-card"
                            key={project.id}
                            onClick={() => handleOpenProject(project.title)}
                        >
                            <img src={project.image} alt={project.title}/>
                        </div>
                        {openProject === project.title ? (
                            <section
                                className="expanded-project-view"
                                ref={sectionRef}
                            >
                                <ProjectsView selectedProject={project.title}/>
                            </section>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}


export default ProjectsPage;