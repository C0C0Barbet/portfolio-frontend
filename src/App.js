import React, {useState} from 'react'
import './App.css';
import RoutingInfo from "./components/navbar/RoutingInfo";
import {Button} from "react-bootstrap";


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
        <div>
            <RoutingInfo initialized={initialized}/>
        </div>
    );
}

export default App;