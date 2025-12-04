import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Cup = ({ fabricCanvas }) => {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    if (fabricCanvas) {
      const canvasTexture = new THREE.CanvasTexture(fabricCanvas.getElement());
      setTexture(canvasTexture);

      const updateTexture = () => {
        canvasTexture.needsUpdate = true;
      };

      fabricCanvas.on("after:render", updateTexture);

      // Initial render
      updateTexture();

      return () => {
        fabricCanvas.off("after:render", updateTexture);
        canvasTexture.dispose();
      };
    }
  }, [fabricCanvas]);

  return (
    <mesh>
      <cylinderGeometry args={[1.5, 1.2, 3, 64, 1, true]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} transparent />
    </mesh>
  );
};

const Preview3D = ({ fabricCanvas }) => {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {fabricCanvas && <Cup fabricCanvas={fabricCanvas} />}
      <OrbitControls />
    </Canvas>
  );
};

export default Preview3D;
