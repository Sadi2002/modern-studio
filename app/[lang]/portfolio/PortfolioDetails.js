"use client";

import Image from "next/image";
import arrow from "../../../public/arrow.png";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function PortfolioDetails({ lang, details, detailsLabel }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const wrapperRef = useRef(null);

  const handleToggle = () => {
    if (isOpen) {
      setIsClosing(true);
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (!isOpen && isClosing && wrapperRef.current) {
      const y =
        wrapperRef.current.getBoundingClientRect().top +
        window.scrollY -
        window.innerHeight * 0.5;

      window.scrollTo({
        top: y,
        behavior: "auto",
      });

      setIsClosing(false);
    }
  }, [isOpen, isClosing]);

  if (!details || details.length === 0) return null;

  return (
    <div ref={wrapperRef}>
      {/* WRAPPER Z ANIMACJĄ WYSOKOŚCI + OPACITY */}
      <div
        className={`
          overflow-hidden
          transition-all duration-500 ease-out
          ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-[20px] md:px-[40px] lg:px-[50px] flex flex-wrap justify-between">
          {details.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-[20px] pb-[40px] lg:w-[48%]"
            >
              <div className="flex gap-[10px] lg:gap-[15px] items-center">
                <span className=" text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px] lg:min-w-[45px] lg:flex lg:justify-end">
                  ({(index + 1).toString().padStart(2, "0")})
                </span>
                <span className="font-medium-font-weight text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px]">
                  {item?.title?.[lang]}
                </span>
              </div>
              <p className="ml-0 lg:ml-[60px] pb-[20px] border-b  border-[rgba(0,0,0,0.48)] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                {item?.text?.[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-[20px] md:px-[40px] lg:px-[50px] 2xl:px-[50px]">
        <button
          onClick={handleToggle}
          className="group relative ml-auto flex items-center gap-2 cursor-pointer font-medium-font-weight uppercase text-[clamp(0.75rem,3.5vw,1rem)] leading-none
  after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:h-[1px] after:w-full"
        >
          {/* ANIMOWANY TEKST */}
          <span className="relative block overflow-hidden">
            <span className="block leading-[20px] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
              {isOpen
                ? detailsLabel?.hideDetails?.[lang]
                : detailsLabel?.viewDetails?.[lang]}
            </span>

            <span className="absolute leading-[20px] left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
              {isOpen
                ? detailsLabel?.hideDetails?.[lang]
                : detailsLabel?.viewDetails?.[lang]}
            </span>
          </span>

          {/* STRZAŁKA */}
          <Image
            src={arrow}
            alt="Arrow Icon"
            className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] relative top-[0.5px]"
          />
        </button>
      </div>
    </div>
  );
}
