"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import arrow from "../../../public/arrow.png";
import heroImgLarge from "../../../public/projekt3-large.webp";

export default function Hero() {
  const [showLarge, setShowLarge] = useState(false);

  useEffect(() => {
    // Odroczone ładowanie 4K – np. 1s po renderze
    const timer = setTimeout(() => setShowLarge(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-[100dvh] relative w-full overflow-hidden bg-center bg-cover bg-[url('/projekt3-small.webp')] mb-[20px]">
      {showLarge && (
        <Image
          src={heroImgLarge}
          unoptimized
          className="object-cover"
          fill
          alt="test"
        />
      )}

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]"></div>

      <div className="mx-margin-mobile flex flex-col h-full relative md:mx-tablet lg:mx-small-laptop 2xl:mx-desktop">
        <div className="absolute bottom-[120px] w-full xl:bottom-[120px] z-20">
          <h1 className="text-main-white text-[clamp(2rem,10vw,3rem)] leading-[clamp(2.2rem,10vw,3rem)] font-medium mb-[25px] lg:text-[70px] lg:leading-[70px] xl:text-[100px] xl:font-normal-font-weight xl:leading-[100px] uppercase 2xl:leading-[120px] 2xl:text-[120px] max-w-[400px] lg:max-w-[600px] xl:max-w-[900px] 2xl:max-w-[1000px]">
            Luxury villa in Tenerife
          </h1>

          <p className="text-main-white font-light-font-weight mb-[50px] text-[clamp(0.75rem,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] max-w-[300px] lg:max-w-[450px] min-[420px]:max-w-[360px] xl:max-w-[740px] xl:mb-[70px]">
            „Luksusowe wille na Majorce łączą nowoczesny design z wyjątkowym
            klimatem wyspy, oferując komfort, prywatność i niezapomniane
            widoki.”
          </p>

          <button className="bg-main-white rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-main-black ml-auto mr-0 font-medium flex items-center md:ml-0 text-[clamp(0.75rem,3.35vw,1rem)]">
            Read more
            <Image
              src={arrow}
              alt="strzałka"
              className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative"
            />
          </button>
        </div>
      </div>

      <span className="absolute bottom-5 left-0 mx-margin-mobile font-normal-font-weight text-[#c6c6c6] text-[10px] md:mx-tablet md:bottom-[50px] md:left-auto md:right-0 md:text-[14px] opacity-[64%] 2xl:mx-desktop">
        (scroll down)
      </span>
    </section>
  );
}
