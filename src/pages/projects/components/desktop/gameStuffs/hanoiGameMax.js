import React from "react";
import {Unity, useUnityContext} from "react-unity-webgl";

const HanoiGameMax = () => {
    const {unityProvider} = useUnityContext({
        loaderUrl: "build/Hanoi Towers Redux WebGL.loader.js",
        dataUrl: "build/Hanoi Towers Redux WebGL.data",
        frameworkUrl: "build/Hanoi Towers Redux WebGL.framework.js",
        codeUrl: "build/Hanoi Towers Redux WebGL.wasm",
    });

    return (
        <Unity
            unityProvider={unityProvider}
            style={{width: 1920, height: 1080}}
        />
    );
};

export default HanoiGameMax;