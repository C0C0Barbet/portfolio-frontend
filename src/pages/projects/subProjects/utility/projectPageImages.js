import React from 'react';
import '../../projectsStyling.css';


const ProjectPageImages = (props) => {
    const images = props.images;
    const handleClick = (image) => {
        props.setSelectedImage(image);
    };


    return (
        <div className="project-image">
            {images.map(image => (
                <img onClick={() => handleClick(image)} className="project-image" key={image.id} src={image.image}
                     alt='game'/>
            ))}
        </div>
    );
};

export default ProjectPageImages;
