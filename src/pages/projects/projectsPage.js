import React from 'react';
import './projectsStyling.css';
import DynamicSize from "./components/picker/dynamicSize";


const ProjectsPage = () => {

    return (
        <div>
            <h1 className={"header"}>Take a look at my projects </h1>
            <div>
                <DynamicSize/>
            </div>
        </div>
    );
}

export default ProjectsPage;
