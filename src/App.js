import React, {useEffect, useState} from "react";
import './App.css';
import RoutingInfo from "./components/navbar/routing/RoutingInfo";


const App = () => {
    const [aspectRatio, setAspectRatio] = useState(null);
    const [nineByNine, setNineByNine] = useState(9 / 19);
    const [nineByTwe, setNineByTwe] = useState(9 / 21);

    useEffect(() => {
        const updateAspectRatio = () => {
            setAspectRatio(window.screen.width / window.screen.height);
        };
        updateAspectRatio();
        window.addEventListener('resize', updateAspectRatio);
        return () => {
            window.removeEventListener('resize', updateAspectRatio);
        };
    }, []);

    const [isInitialRender, setIsInitialRender] = useState(true);

    useEffect(() => {
        setIsInitialRender(false);
    }, []);

    if (aspectRatio < 9 / 21 && aspectRatio > 9 / 19) {
        return (
            <div>
                <p>
                    Current aspect ratio: {aspectRatio}
                </p>
                <RoutingInfo isInitialRender={isInitialRender}/>
            </div>
        );
    } else {
        return (
            <div>
                <RoutingInfo isInitialRender={isInitialRender}/>
            </div>
        );
    }
}

export default App;