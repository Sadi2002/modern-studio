"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ModelLoader from "./ModelLoader";

const getFullscreenElement = () =>
  document.fullscreenElement ||
  document.webkitFullscreenElement ||
  document.msFullscreenElement ||
  null;

const requestFullscreen = (el) => {
  if (!el) return;
  if (el.requestFullscreen) el.requestFullscreen();
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  else if (el.msRequestFullscreen) el.msRequestFullscreen();
};

const exitFullscreen = () => {
  if (document.exitFullscreen) document.exitFullscreen();
  else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  else if (document.msExitFullscreen) document.msExitFullscreen();
};

export default function Model({ imgSrc, modelUrl }) {
  console.log(modelUrl);
  const [show3D, setShow3D] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const containerRef = useRef(null);

  // breakpoint
  useEffect(() => {
    const check = () => setIsLg(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // sync fullscreen state
  useEffect(() => {
    const handleChange = () => setFullscreen(!!getFullscreenElement());
    document.addEventListener("fullscreenchange", handleChange);
    document.addEventListener("webkitfullscreenchange", handleChange);
    document.addEventListener("msfullscreenchange", handleChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
      document.removeEventListener("webkitfullscreenchange", handleChange);
      document.removeEventListener("msfullscreenchange", handleChange);
    };
  }, []);

  const toggle3D = () => {
    if (!show3D) setShow3D(true), setLoading(true);
    else {
      if (fullscreen) exitFullscreen();
      setShow3D(false);
    }
  };

  const toggleFullscreen = () => {
    if (!isLg) return; // fullscreen dostępny tylko od lg
    getFullscreenElement()
      ? exitFullscreen()
      : requestFullscreen(containerRef.current);
  };

  const wrapperClass = fullscreen
    ? "fixed inset-0 z-[9999] w-screen h-screen bg-black"
    : "aspect-[8/6] lg:aspect-[6/3]";

  return (
    <div
      ref={containerRef}
      className={`relative w-full transition-all duration-500 bg-gray-100 ${wrapperClass}`}
    >
      <Image
        src={imgSrc || "/placeholder.jpg"}
        alt="pokój"
        fill
        className={`object-cover transition-opacity duration-500 z-10 ${
          show3D && !loading ? "opacity-0" : "opacity-100"
        }`}
      />

      <div
        className={`absolute inset-0 z-40 transition-opacity duration-500 ${
          show3D && !loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {show3D && (
          <ModelLoader
            setLoading={setLoading}
            fullscreen={fullscreen}
            modelUrl={modelUrl}
          />
        )}
      </div>

      {show3D && loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <div className="absolute bottom-5 right-5 z-[80] flex gap-3">
        {show3D && isLg && (
          <button
            onClick={toggleFullscreen}
            className="px-6 py-2 bg-white rounded-full shadow hover:bg-gray-200"
          >
            {fullscreen ? "Opuść Pełny Ekran" : "Pełny Ekran"}
          </button>
        )}
        <button
          onClick={toggle3D}
          className="px-6 py-2 bg-white rounded-full shadow hover:bg-gray-200"
        >
          {show3D ? "Opuść 3D" : "Zobacz w 3D"}
        </button>
      </div>
    </div>
  );
}
