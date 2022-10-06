import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const HanoiGame = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "build/Hanoi Towers Redux WebGL.loader.js",
        dataUrl: "build/Hanoi Towers Redux WebGL.data",
        frameworkUrl: "build/Hanoi Towers Redux WebGL.framework.js",
        codeUrl: "build/Hanoi Towers Redux WebGL.wasm",
    });
    return (
        <Unity
            unityProvider={unityProvider}
            style={{ width: 640, height: 360 }}
        />
    );
};

export const HanoiLink = () => {
    return (
        <iframe title={"hanoiLink"}
                src="https://itch.io/embed/1135151?border_width=5&amp;bg_color=d1d1d1&amp;link_color=5bf5fa&amp;border_color=000000"
                width="560" height="175" ><a href="https://c0c0barbet.itch.io/tower-of-hanoi-redux">Tower of Hanoi Redux
            by C0C0Barbet</a></iframe>
    );
};