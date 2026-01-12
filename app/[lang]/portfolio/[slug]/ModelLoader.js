"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

import * as THREE from "three";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setIsLg(w >= 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return { isMobile, isLg };
}

function Floor() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.01, 0]}
      receiveShadow
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#ccc" roughness={1} metalness={0} />
    </mesh>
  );
}

function ModelContent({ modelUrl, setLoading }) {
  const ref = useRef();
  const gltf = useGLTF("/model.glb");

  // ⬇️ KLON SCENY – NAJWAŻNIEJSZE
  const scene = gltf.scene.clone(true);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
    }
  });

  useEffect(() => {
    // 🔁 HARD RESET ROTACJI
    if (ref.current) {
      ref.current.rotation.set(0, 0, 0);
    }

    scene.traverse((c) => {
      if (c.isMesh) {
        c.castShadow = true;
        c.receiveShadow = true;
        c.material.side = THREE.DoubleSide;
        c.material.needsUpdate = true;
      }
    });

    setLoading(false);
  }, [scene, setLoading]);

  return <primitive ref={ref} object={scene} />;
}

export default function ModelLoader({ modelUrl, setLoading, fullscreen }) {
  const { isLg } = useIsMobile();

  // ustawienia zoom i kąt
  const minDistance = 50; // minimalny zoom
  const maxDistance = 20; // maksymalny zoom
  const maxPolarAngle = Math.PI / 2.17; // max 90° pionowo (nie patrz pod model)
  const minPolarAngle = 0; // opcjonalnie od góry

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 4] }}
      style={{
        width: "100%",
        height: "100%",
        background: "#f3f4f6",
        touchAction: "none",
      }}
      gl={{
        preserveDrawingBuffer: true,
        physicallyCorrectLights: true,
      }}
    >
      <Environment files="/horn.hdr" background={false} />
      {/* <pointLight intensity={10} position={[12, 5.5, 3]} color={"yellow"} /> */}

      {/* FILL LIGHT */}
      <directionalLight intensity={5} position={[-5, 3, 5]} />

      {/* RIM / BACK LIGHT */}
      <directionalLight intensity={5} position={[0, 5, -10]} />

      <OrbitControls
        enableRotate={true} // zawsze obrót
        enableZoom={isLg ? fullscreen : true} // zoom wg breakpoint + fullscreen
        enablePan={false}
        minDistance={minDistance}
        maxDistance={maxDistance}
        maxPolarAngle={maxPolarAngle}
        minPolarAngle={minPolarAngle}
      />

      <Suspense fallback={null}>
        <Floor />
        <ModelContent setLoading={setLoading} modelUrl={modelUrl} />
      </Suspense>
    </Canvas>
  );
}
