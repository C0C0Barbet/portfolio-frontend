import React from 'react';
import '../../projectsStyling.css';


const ProjectSelectedPhoto = (props) => {
    const chosenImage = props.image;

    return (
        <div>
            <img className="project-selected-image" key={chosenImage.id} src={chosenImage.image} alt='game'/>
        </div>
    );
};

export default ProjectSelectedPhoto;
