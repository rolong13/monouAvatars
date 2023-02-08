import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityWebGL: React.FC = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "../../src/unity/build/WebGLBuilds.loader.js",
    dataUrl: "../../src/unity/build/WebGLBuilds.data",
    frameworkUrl: "../../src/unity/build/WebGLBuilds.framework.js",
    codeUrl: "../../src/unity/build/WebGLBuilds.wasm",
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
  );
}

export default UnityWebGL;