import React, {useState} from 'react'
import './App.css';
import RoutingInfo from "./components/navbar/RoutingInfo";


const App = () => {
    const [initialized, setInitialized] = useState(false);

    const handleEntry = () => {
        setInitialized(!initialized);
    };
    return (
        <div className="app">
            <div className='app-navbar'>
                <RoutingInfo initialized={initialized}/>
            </div>
            <div className={!initialized ? 'app-entry active' : 'app-entry'}>
                <button className='button-main' onClick={handleEntry}>
                    Enter Site
                </button>
            </div>
        </div>
    );
}

export default App;