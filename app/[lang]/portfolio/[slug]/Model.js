// --- Model.js ---
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import ModelLoader from "./ModelLoader";

export default function Model({ imgSrc }) {
  const [show3D, setShow3D] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef = useRef(null);

  const toggle3D = () => {
    if (!show3D) {
      setLoading(true); // wchodzimy w 3D → włącz loader
      setShow3D(true);
    } else {
      // wychodzimy z 3D → wyłącz fullscreen jeśli był
      if (fullscreen) exitFullscreen();
      setShow3D(false);
    }
  };

  const enterFullscreen = () => {
    if (!containerRef.current) return;
    const scrollY = window.scrollY;
    if (containerRef.current.requestFullscreen)
      containerRef.current.requestFullscreen();
    else if (containerRef.current.webkitRequestFullscreen)
      containerRef.current.webkitRequestFullscreen();
    else if (containerRef.current.msRequestFullscreen)
      containerRef.current.msRequestFullscreen();
    setFullscreen(true);
    window.scrollTo(0, scrollY); // zachowaj scroll
  };

  const exitFullscreen = () => {
    const scrollY = window.scrollY;
    if (document.fullscreenElement) document.exitFullscreen();
    setFullscreen(false);
    window.scrollTo(0, scrollY); // przywróć scroll
  };

  const toggleFullscreen = () => {
    fullscreen ? exitFullscreen() : enterFullscreen();
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${
        !fullscreen ? "aspect-[8/6] lg:aspect-[6/3]" : ""
      } bg-gray-100 transition-all duration-500`}
    >
      {/* Tło */}
      <Image
        src={imgSrc || "/placeholder.jpg"}
        alt="pokój"
        fill
        className={`object-cover transition-opacity duration-500 ${
          show3D && !loading ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Canvas z modelem 3D */}
      <div
        className={`absolute top-0 left-0 w-full h-full z-40 transition-opacity duration-500 ${
          show3D && !loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {show3D && (
          <ModelLoader setLoading={setLoading} fullscreen={fullscreen} />
        )}
      </div>

      {/* Loader overlay */}
      {show3D && loading && (
        <div className="absolute inset-0 z-50 flex justify-center items-center bg-black/80 transition-opacity duration-500">
          <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>
      )}

      {/* Przyciski */}
      <div className="absolute bottom-[20px] right-[20px] md:bottom-[50px] md:right-[50px] flex gap-[10px] z-[70] transition-opacity duration-500">
        {show3D && (
          <button
            onClick={toggleFullscreen}
            className="py-[10px] px-[30px] bg-white text-black flex justify-center items-center rounded-[500px] cursor-pointer shadow-lg hover:bg-gray-200 transition"
          >
            {fullscreen ? "Opuść Pełny Ekran" : "Pełny Ekran"}
          </button>
        )}
        <button
          onClick={toggle3D}
          className="py-[10px] px-[30px] bg-white text-black flex justify-center items-center rounded-[500px] cursor-pointer shadow-lg hover:bg-gray-200 transition"
        >
          {show3D ? "Opuść 3D" : "Zobacz w 3D"}
        </button>
      </div>
    </div>
  );
}
