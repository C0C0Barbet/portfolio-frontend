import React from "react";
import {Unity, useUnityContext} from "react-unity-webgl";

const HanoiGame = () => {
    const {unityProvider} = useUnityContext({
        loaderUrl: "build/Hanoi Towers Redux WebGL.loader.js",
        dataUrl: "build/Hanoi Towers Redux WebGL.data",
        frameworkUrl: "build/Hanoi Towers Redux WebGL.framework.js",
        codeUrl: "build/Hanoi Towers Redux WebGL.wasm",
    });
    return (
        <Unity
            unityProvider={unityProvider}
            style={{width: 640, height: 360}}
        />
    );
};

export default HanoiGame;