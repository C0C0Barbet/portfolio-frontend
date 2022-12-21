import React from 'react';
import Me from "../../../filesToUse/images/me.jpg";

const AboutHeader = () => {
    return (
        <div>
            <div className="about-header-elements">
                My Name is Colin Burgess
            </div>

            <div className="about-header-elements">
                <img className="my-image" src={Me} alt="Yep, that's me!"/>
            </div>
        </div>
    );
};

export default AboutHeader;