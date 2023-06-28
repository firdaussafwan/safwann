import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene } = useGLTF("./logo_3d/scene.gltf"); // Load the GLTF model

  return (
    <primitive object={scene} scale={0.4} position-y={-0.1} rotation-y={0} rotation-x={-1.6} rotation-z={1.5}/>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={0.5} /> {/* Add ambient light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      /> {/* Add directional light */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
      <EffectComposer>
        <Bloom
          intensity={1} // Adjust the intensity of the bloom effect
          luminanceThreshold={0} // Set the minimum luminance required for bloom to occur
          luminanceSmoothing={1} // Set the smoothing of the bloom effect
          height={300} // Set the height of the render target (lower value for performance)
          prePass // Enable pre-pass for color modification
          materialParameters={{
            // Modify the color of the bloom effect
            blendFunction: 14, // Additive blending
            scale: 0.5, // Adjust the scale of the bloom effect
            intensity: 1, // Adjust the intensity of the bloom effect
            color: "blue", // Change the color of the bloom effect (e.g., red)
          }}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default EarthCanvas;
