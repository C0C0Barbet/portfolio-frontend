import {useWindowDimensions} from "../../../../baseUtilities/deviceViewport";
import React, {useState} from "react";
import HanoiFull from "../desktop/hanoiFull";
import PrisonFull from "../desktop/prisonFull";
import HanoiMini from "../mobile/hanoiMini";
import PrisonMini from "../mobile/prisonMini";

const DynamicSize = () => {

    const {height, width} = useWindowDimensions();

    let [hasHanoiRender, setHanoiRender] = useState(false);
    const showHanoi = () => {
        setHanoiRender(hasHanoiRender = !hasHanoiRender);
        setPrisonRender(false);
    };
    let [hasPrisonRender, setPrisonRender] = useState(false);
    const showPrison = () => {
        setPrisonRender(hasPrisonRender = !hasPrisonRender);
        setHanoiRender(false);
    };

    if (width > height) {
        return (
            <div>
                <div>
                    <p> Width: {width} and Height: {height} </p>
                </div>
                <div className={"buttonGroup"}>
                    <button className={"button-Traditional"} onClick={showHanoi}>Tower of Hanoi Redux</button>
                    <button className={"button-Traditional"} onClick={showPrison}>Prison Escape: Freedom Awaits
                    </button>
                </div>
                <div className={"gameDisplay"}>
                    {hasHanoiRender && <HanoiFull/>}
                    {hasPrisonRender && <PrisonFull/>}
                </div>
            </div>
        );
    }
    return (
        <div>
            <div>
                <p> Width: {width} and Height: {height} </p>
            </div>
            <div className={"buttonGroup"}>
                <button className={"button-Mobile"} onClick={showHanoi}>Tower of Hanoi Redux</button>
                <button className={"button-Mobile"} onClick={showPrison}>Prison Escape: Freedom Awaits</button>
            </div>
            <div className={"gameDisplay"}>
                {hasHanoiRender && <HanoiMini/>}
                {hasPrisonRender && <PrisonMini/>}
            </div>
        </div>
    );
}

export default DynamicSize;