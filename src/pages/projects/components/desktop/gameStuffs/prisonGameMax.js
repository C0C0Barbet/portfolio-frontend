import React from "react";
import {Unity, useUnityContext} from "react-unity-webgl";

const PrisonGameMax = () => {
    const {unityProvider} = useUnityContext({
        loaderUrl: "build/My First Game Jam 2021 WebGL.loader.js",
        dataUrl: "build/My First Game Jam 2021 WebGL.data",
        frameworkUrl: "build/My First Game Jam 2021 WebGL.framework.js",
        codeUrl: "build/My First Game Jam 2021 WebGL.wasm",
    });
    return (
        <Unity
            unityProvider={unityProvider}
            style={{width: 1920, height: 1080}}
        />
    );
};

export default PrisonGameMax;