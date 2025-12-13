// --- Model.js (OSTATECZNA WERSJA POPRAWIONA) ---
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ModelLoader from "./ModelLoader";

export default function Model({ imgSrc }) {
  const [show3D, setShow3D] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef = useRef(null);

  // Zoptymalizowane słuchacze pełnego ekranu
  useEffect(() => {
    const handleFullscreenChange = () => {
      // Sprawdzamy, czy BIEŻĄCY element jest elementem pełnoekranowym
      const isFullscreen =
        document.fullscreenElement === containerRef.current ||
        document.webkitFullscreenElement === containerRef.current ||
        document.msFullscreenElement === containerRef.current;
      setFullscreen(isFullscreen);
    };

    // Dodaj słuchaczy zdarzeń, upewniając się, że przeglądarka jest informowana o zmianach
    // Użycie opcji { passive: false } jest standardem dla kontroli
    document.addEventListener("fullscreenchange", handleFullscreenChange, {
      passive: false,
    });
    document.addEventListener(
      "webkitfullscreenchange",
      handleFullscreenChange,
      { passive: false }
    );
    document.addEventListener("msfullscreenchange", handleFullscreenChange, {
      passive: false,
    });

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange, {
        passive: false,
      });
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange,
        { passive: false }
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange,
        { passive: false }
      );
    };
  }, []);

  const toggle3D = () => {
    if (!show3D) {
      setLoading(true);
      setShow3D(true);
    } else {
      if (fullscreen) exitFullscreen();
      setShow3D(false);
    }
  };

  const enterFullscreen = () => {
    if (!containerRef.current) return;

    // Próba wejścia w pełny ekran
    const element = containerRef.current;

    if (element.requestFullscreen) {
      // Dodanie .catch() dla lepszej diagnostyki i uniknięcia błędów JS
      element.requestFullscreen().catch((err) => {
        console.error(`Błąd pełnego ekranu: ${err.name} - ${err.message}`);
      });
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const toggleFullscreen = (e) => {
    // Zapobiegamy domyślnym działaniom dotyku/kliknięcia (np. dwuklik zoom)
    if (e) e.stopPropagation();
    fullscreen ? exitFullscreen() : enterFullscreen();
  };

  const fullscreenProps = fullscreen
    ? {
        tabIndex: -1,
        className: "fixed inset-0 z-[9999] h-screen outline-none",
      }
    : {
        className: "aspect-[8/6] lg:aspect-[6/3]",
      };

  return (
    <div
      ref={containerRef}
      className={`relative w-full transition-all duration-500 bg-gray-100 ${fullscreenProps.className}`}
      tabIndex={fullscreenProps.tabIndex}
    >
      {/* Tło */}
      <Image
        src={imgSrc || "/placeholder.jpg"}
        alt="pokój"
        fill
        className={`object-cover transition-opacity duration-500 z-10 ${
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
      <div className="absolute bottom-[20px] right-[20px] md:bottom-[50px] md:right-[50px] flex gap-[10px] z-[80] transition-opacity duration-500">
        {show3D && (
          <button
            // Zmiana na onTouchStart dla niezawodności na iOS
            onTouchStart={toggleFullscreen}
            onClick={toggleFullscreen} // Zachowujemy onClick dla desktopu
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
