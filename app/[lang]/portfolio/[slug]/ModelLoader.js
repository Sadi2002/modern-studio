// --- ModelLoader.js ---
"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function ModelContent({ setLoading }) {
  const ref = useRef();
  const gltf = useGLTF("/model.glb");

  // Model od razu powoli się obraca
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });

  // Wyłącz loader po pełnym załadowaniu
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  // Podwójne boki materiału
  gltf.scene.traverse((child) => {
    if (child.isMesh) child.material.side = THREE.DoubleSide;
  });

  return <primitive ref={ref} object={gltf.scene} />;
}

export default function ModelLoader({ setLoading, fullscreen }) {
  return (
    <Canvas
      camera={{ position: [0, 1, 3] }}
      style={{ background: "#f3f4f6" }} // bg-gray-100 jak w tailwind
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} />
      <OrbitControls
        enableZoom={fullscreen}
        enableRotate={fullscreen}
        enablePan={false}
      />
      <Suspense fallback={null}>
        <ModelContent setLoading={setLoading} />
      </Suspense>
    </Canvas>
  );
}
