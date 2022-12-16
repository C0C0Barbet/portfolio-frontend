import React from 'react';
import './projectsStyling.css';
import tower from '../../filesToUse/images/TowerOfHanoi.png';
import prison from '../../filesToUse/images/PrisonEscape.png';


const ProjectsPage = () => {

    return (
        <div className="projects-body">
            <h1>Check out my projects</h1>
            <div className='cards-container'>
                <div className='game-card'>
                    <img src={tower} alt='Tower of Hanoi Redux'></img>
                    <div className="title">Tower of Hanoi</div>
                </div>
                <div className='game-card'>
                    <img src={prison} alt='Prison Escape Freedom Awaits'></img>
                    <div className="title">Prison Escape Freedom Awaits</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
