"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function ModelLoader({ isLoading, setLoading }) {
  return (
    <Canvas camera={{ position: [0, 1, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Model setLoading={setLoading} />
      </Suspense>
      <OrbitControls enableZoom enableRotate />
    </Canvas>
  );
}

function Model({ setLoading }) {
  const ref = useRef();
  const gltf = useGLTF("/model.glb");

  // Obrót modelu po osi Y
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });

  // Po załadowaniu modelu
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return <primitive ref={ref} object={gltf.scene} />;
}
