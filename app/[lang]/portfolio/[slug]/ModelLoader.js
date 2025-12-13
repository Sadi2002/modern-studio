// --- ModelLoader.js ---
"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function ModelContent({ setLoading }) {
  const ref = useRef();
  const gltf = useGLTF("/model.glb");

  // Obrót modelu
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  gltf.scene.traverse((child) => {
    if (child.isMesh) child.material.side = THREE.DoubleSide;
  });

  return <primitive ref={ref} object={gltf.scene} />;
}

export default function ModelLoader({ setLoading, fullscreen }) {
  const canvasRef = useRef();
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Responsywność
  useEffect(() => {
    const updateSize = () => {
      if (canvasRef.current) {
        setSize({
          width: canvasRef.current.clientWidth,
          height: canvasRef.current.clientHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div ref={canvasRef} className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1, 3] }}
        style={{ width: "100%", height: "100%", background: "#f3f4f6" }}
        gl={{ preserveDrawingBuffer: true }}
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
    </div>
  );
}
