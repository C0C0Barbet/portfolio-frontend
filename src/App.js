import React, {useEffect, useState} from "react";
import './App.css';
import RoutingInfo from "./components/navbar/routing/RoutingInfo";


const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

    const [isInitialRender, setIsInitialRender] = useState(true);

    useEffect(() => {
        setIsInitialRender(false);
    }, []);

    return (
        <div>
            <RoutingInfo isInitialRender={isInitialRender}/>
        </div>
    );
}

export default App;