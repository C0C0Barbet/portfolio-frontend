import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

/*
const Prison = () => {
    return (
        <div>
            <div>
                <h1> Prison Escape: Freedom Awaits </h1>
            </div>
            <div>
                <iframe title="prisonEscape" src="https://itch.io/embed-upload/4608389?color=000000" allowFullScreen="" width="1280"
                        height="720"><a href="https://vesiiy.itch.io/prison-escape">Play Prison Escape:
                    Freedom Awaits on itch.io</a></iframe>
            </div>
        </div>
    );
};
*/

const Prison = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "build/My First Game Jam 2021 WebGL.loader.js",
        dataUrl: "build/My First Game Jam 2021 WebGL.data",
        frameworkUrl: "build/My First Game Jam 2021 WebGL.framework.js",
        codeUrl: "build/My First Game Jam 2021 WebGL.data",
    });
    return (
        <Unity
            unityProvider={unityProvider}
            style={{ width: 1000, height: 1000 }}
        />
    );
};




export default Prison;