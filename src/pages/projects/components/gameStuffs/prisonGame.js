import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const PrisonGame = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "build/My First Game Jam 2021 WebGL.loader.js",
        dataUrl: "build/My First Game Jam 2021 WebGL.data",
        frameworkUrl: "build/My First Game Jam 2021 WebGL.framework.js",
        codeUrl: "build/My First Game Jam 2021 WebGL.wasm",
    });
    return (
        <Unity
            unityProvider={unityProvider}
            style={{ width: 640, height: 360 }}
        />
    );
};