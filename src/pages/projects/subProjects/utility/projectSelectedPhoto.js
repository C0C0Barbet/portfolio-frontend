import React from 'react';
import '../../projectsStyling.css';


const ProjectSelectedPhoto = (props) => {
    const chosenImage = props.image;

    return (
        <div className="project-selected-image-holder">
            <img className="project-selected-image-itself" key={chosenImage.id} src={chosenImage.image} alt='game'/>
        </div>
    );
};

export default ProjectSelectedPhoto;
