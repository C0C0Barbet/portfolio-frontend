import React, { useState } from 'react';
import { HanoiGame, HanoiLink } from './projects/hanoi';
import { PrisonGame, PrisonLink } from './projects/prison';
import {useWindowDimensions} from "./utilities/deviceViewport";


const header = {
    display: 'flex',
    padding: '10px',
    justifyContent: 'Center',
    textAlign: 'Center'
}

const buttonGroup = {
    display: 'grid',
    gridTemplateColumns: '5% 30% 30% 30% 5%',
    gridTemplateRows: '100px',
    justifyContent: 'Center',
    alignItems: 'Center'
}

const projOneButtonTrad = {
    fontFamily: 'fantasy',
    fontSize:'15px',
    gridColumn: '2',
    height: '50%',
    width: '100%'
}

const projTwoButtonTrad = {
    fontFamily: 'fantasy',
    fontSize:'15px',
    gridColumn: '4',
    height: '50%',
    width: '100%',
}

const projOneButtonMob = {
    fontFamily: 'fantasy',
    fontSize:'10px',
    gridColumn: '2',
    height: '50%',
    width: '100%'
}

const projTwoButtonMob = {
    fontFamily: 'fantasy',
    fontSize:'10px',
    gridColumn: '4',
    height: '50%',
    width: '100%',
}

const gameDisplay = {
    display: 'flex',
    justifyContent: 'Center',
    alignItems: 'Center',
    padding: '2% 2% 2% 2%'
}

const Projects = () => {

    const { height, width } = useWindowDimensions();

    let [hasHanoiRender, setHanoiRender] = useState(false);
    let [hasPrisonRender, setPrisonRender] = useState(false);
    const showHanoi = () => {
        setHanoiRender(hasHanoiRender = !hasHanoiRender);
        setPrisonRender(false);
    };
    const showPrison = () => {
        setPrisonRender(hasPrisonRender = !hasPrisonRender);
        setHanoiRender(false);
    };

    if (width >= 800 && height >= 700) {
        console.log("Displaying link");
        return (
            <div>
                <h1 style={header}>Take a look at my projects </h1>
                <div>
                    <p> Width: { width } and Height: { height } </p>
                </div>
                <div style={buttonGroup}>
                    <button style={projOneButtonTrad} onClick={showHanoi}>Tower of Hanoi Redux</button>
                    <button style={projTwoButtonTrad} onClick={showPrison}>Prison Escape: Freedom Awaits</button>
                </div>
                <div>
                    <div style={gameDisplay}>
                        {hasHanoiRender && <HanoiGame/>}
                        {hasPrisonRender && <PrisonGame/>}
                    </div>
                </div>
            </div>
        );
    }
    else if (height > width) {
        console.log("Displaying link");
        return (
            <div>
                <h1 style={header}>Take a look at my projects </h1>
                <div>
                    <p> Width: { width } and Height: { height } </p>
                </div>
                <div style={buttonGroup}>
                    <button style={projOneButtonMob} onClick={showHanoi}>Tower of Hanoi Redux</button>
                    <button style={projTwoButtonMob} onClick={showPrison}>Prison Escape: Freedom Awaits</button>
                </div>
                <div>
                    <div style={gameDisplay}>
                        {hasHanoiRender && <HanoiLink/>}
                        {hasPrisonRender && <PrisonLink/>}
                    </div>
                </div>
            </div>
        );
    }

    else {
        return (
            <div>
                <h1 style={header}>Take a look at my projects </h1>
                <div>
                    <p> Width: { width } and Height: { height } </p>
                </div>
                <div style={buttonGroup}>
                    <button style={projOneButtonTrad} onClick={showHanoi}>Tower of Hanoi Redux</button>
                    <button style={projTwoButtonTrad} onClick={showPrison}>Prison Escape: Freedom Awaits</button>
                </div>
                <div>
                    <div style={gameDisplay}>
                        {hasHanoiRender && <HanoiLink/>}
                        {hasPrisonRender && <PrisonLink/>}
                    </div>
                </div>
            </div>
        );
    }
};

export default Projects;
