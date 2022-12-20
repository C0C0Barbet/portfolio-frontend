import React from 'react';
import Me from "../../../filesToUse/images/me.jpg";

const AboutHeader = () => {
    return (
        <div>
            <div>
                My Name is Colin Burgess
            </div>

            <div>
                <img className="my-image" src={Me} alt="Yep, that's me!"/>
            </div>
        </div>
    );
};

export default AboutHeader;