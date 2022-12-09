import React, {useState} from 'react'
import './App.css';
import {Button} from "react-bootstrap";
import RoutingInfo from "./components/navbar/RoutingInfo";


const App = () => {
    const [initialized, setInitialized] = useState(false);

    const handleEntry = () => {
        setInitialized(!initialized);
    };

    if (!initialized) {
        return (
            <div className='app-entry active align-items-center'>
                <Button variant="outline-info" onClick={handleEntry}>What?</Button>
            </div>
        );
    }
    return (
        <div className="initializedFade">
            <RoutingInfo initialized={initialized}/>
        </div>
    );
}

export default App;