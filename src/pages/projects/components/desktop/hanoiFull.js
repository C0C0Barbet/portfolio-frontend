import React from 'react';
import '../../projectsStyling.css';
import {useWindowDimensions} from "../../../../baseUtilities/deviceViewport";
import HanoiGameGreater from "./gameStuffs/hanoiGameGreater";
import HanoiGameLesser from "./gameStuffs/hanoiGameLesser";
import HanoiGameMax from "./gameStuffs/hanoiGameMax";


const HanoiFull = () => {

    const {height, width} = useWindowDimensions();

    if (width > 1920 && height > 1080) {
        return (
            <div>
                {<HanoiGameMax/>}
            </div>
        );
    } else if (width > 1280 && height > 720) {
        return (
            <div>
                {<HanoiGameGreater/>}
            </div>
        );
    }
    return (
        <div>
            {<HanoiGameLesser/>}
        </div>
    );
};

export default HanoiFull;
