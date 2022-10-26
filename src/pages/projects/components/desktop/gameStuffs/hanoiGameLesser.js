import React from "react";
import {Unity, useUnityContext} from "react-unity-webgl";

const HanoiGameLesser = () => {
    const {unityProvider} = useUnityContext({
        loaderUrl: "build/Hanoi Towers Redux 2022 WebGL.loader.js",
        dataUrl: "build/Hanoi Towers Redux 2022 WebGL.data",
        frameworkUrl: "build/Hanoi Towers Redux 2022 WebGL.framework.js",
        codeUrl: "build/Hanoi Towers Redux 2022 WebGL.wasm",
    });

    return (
        <Unity
            unityProvider={unityProvider}
            style={{width: 640, height: 360}}
        />
    );
};

export default HanoiGameLesser;