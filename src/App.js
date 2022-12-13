import React from "react";
import './App.css';
import RoutingInfo from "./components/navbar/RoutingInfo";


const App = () => {
    //
    // const [initialized, setInitialized] = useState(false);
    //
    // const handleEntry = () => {
    //     setInitialized(!initialized);
    // };
    //
    // if (!initialized) {
    //     return (
    //         <div className='app-entry active align-items-center'>
    //             <Button variant="outline-info" onClick={handleEntry}>What?</Button>
    //         </div>
    //     );
    // }

    return (
        <RoutingInfo/>
    );
}

export default App;