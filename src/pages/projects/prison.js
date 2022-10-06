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

export const PrisonLink = () => {
    return (
        <iframe title={"prisonLink"}
            src="https://itch.io/embed/1120184?border_width=5&amp;bg_color=d1d1d1&amp;link_color=5bf5fa&amp;border_color=000000"
            width="560" height="175"><a href="https://vesiiy.itch.io/prison-escape">Prison Escape:
            Freedom Awaits by Vesiy, C0C0Barbet</a></iframe>
    );
};