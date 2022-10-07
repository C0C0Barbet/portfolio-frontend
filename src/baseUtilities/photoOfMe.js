import React from 'react';
import "../components/navbar/navbarStyling.css"
import me from '../filesToUse/images/me.jpg';
import {getWindowDimensions} from "./deviceViewport";


function MeInVogue() {

    let {width, height} = getWindowDimensions();

    let imgWidth;
    let imgHeight;

    if (width > 1920 && height > 1080) {
        imgWidth = 300;
        imgHeight = 300;
    } else if (width > 1280 && height > 720) {
        imgWidth = 300;
        imgHeight = 300;
    } else {
        imgWidth = 100;
        imgHeight = 100;
    }

    return <img className="nav-logo" src={me} alt="Yep, that's me!" width={imgWidth} height={imgHeight}/>;
}

export default MeInVogue;