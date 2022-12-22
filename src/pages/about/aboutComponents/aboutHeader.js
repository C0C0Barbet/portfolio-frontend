import React from 'react';
import Me from "../../../filesToUse/images/me.jpg";

const AboutHeader = () => {
    return (
        <div>
            <h1 className="about-header-elements">
                I'm Colin Burgess
            </h1>

            <div className="about-header-elements">
                <img className="my-image" src={Me} alt="Yep, that's me!"/>
            </div>
        </div>
    );
};

export default AboutHeader;