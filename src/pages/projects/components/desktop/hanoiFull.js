import React from 'react';
import '../../projectsStyling.css';
import {useWindowDimensions} from "../../../../baseUtilities/deviceViewport";
import HanoiGameGreater from "./gameStuffs/hanoiGameGreater";
import HanoiGameLesser from "./gameStuffs/hanoiGameLesser";


const HanoiFull = () => {

    const {height, width} = useWindowDimensions();

    if (width > 720 && height > 720) {
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
