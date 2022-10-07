import React from 'react';
import '../../projectsStyling.css';
import {useWindowDimensions} from "../../../../baseUtilities/deviceViewport";
import PrisonGameGreater from "./gameStuffs/prisonGameGreater";
import PrisonGameLesser from "./gameStuffs/prisonGameLesser";
import PrisonGameMax from "./gameStuffs/prisonGameMax";


const PrisonFull = () => {

    const {height, width} = useWindowDimensions();

    if (width > 1920 && height > 1080) {
        return (
            <div>
                {<PrisonGameMax/>}
            </div>
        );
    } else if (width > 720 && height > 720) {
        return (
            <div>
                {<PrisonGameGreater/>}
            </div>
        );
    }
    return (
        <div>
            {<PrisonGameLesser/>}
        </div>
    );
};

export default PrisonFull;