import React from 'react';
import '../../projectsStyling.css';
import {useWindowDimensions} from "../../../../baseUtilities/deviceViewport";
import PrisonGameGreater from "./gameStuffs/prisonGameGreater";
import PrisonGameLesser from "./gameStuffs/prisonGameLesser";


const PrisonFull = () => {

    const {height, width} = useWindowDimensions();

    if (width > 720 && height > 720) {
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