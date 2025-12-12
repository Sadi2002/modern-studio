"use client";

import Image from "next/image";
import arrow from "../../public/arrow.png";
import { useState } from "react";
import Link from "next/link";

export default function PortfolioDetails() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* WRAPPER Z ANIMACJĄ WYSOKOŚCI + OPACITY */}
      <div
        className={`
          overflow-hidden
          transition-all duration-500 ease-out
          ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-[20px] md:px-[40px] lg:px-[50px] flex flex-wrap justify-between">
          <div className="flex flex-col gap-[20px] pb-[40px] lg:w-[48%]">
            <div className="flex gap-[10px] lg:gap-[15px] items-center">
              <span className=" text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px] lg:min-w-[45px] lg:flex lg:justify-end">
                (01)
              </span>
              <span className="font-medium-font-weight text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px]">
                Założenia projektu:
              </span>
            </div>
            <p className="ml-0 lg:ml-[60px] pb-[20px] border-b border-[rgba(0,0,0,0.48)] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
              Projekt willi na Majorce rozpoczął się od określenia potrzeb
              inwestora, który oczekiwał nowoczesnej, jasnej przestrzeni z
              widokiem na morze, minimalistycznej formy oraz zastosowania
              naturalnych materiałów typowych dla śródziemnomorskiego klimatu.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] pb-[40px] lg:w-[48%]">
            <div className="flex gap-[10px] lg:gap-[15px] items-center">
              <span className=" text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px] lg:min-w-[45px] lg:flex lg:justify-end">
                (02)
              </span>
              <span className="font-medium-font-weight text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px] ">
                Założenia projektu:
              </span>
            </div>
            <p className="ml-0 lg:ml-[60px] pb-[20px] border-b border-[rgba(0,0,0,0.48)] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
              Projekt willi na Majorce rozpoczął się od określenia potrzeb
              inwestora, który oczekiwał nowoczesnej, jasnej przestrzeni z
              widokiem na morze, minimalistycznej formy oraz zastosowania
              naturalnych materiałów typowych dla śródziemnomorskiego klimatu.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] pb-[40px] lg:w-[48%]">
            <div className="flex gap-[10px] lg:gap-[15px] items-center">
              <span className=" text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px] lg:min-w-[45px] lg:flex lg:justify-end">
                (03)
              </span>
              <span className="font-medium-font-weight text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px]">
                Założenia projektu:
              </span>
            </div>
            <p className="ml-0 lg:ml-[60px] pb-[20px] border-b border-[rgba(0,0,0,0.48)] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
              Projekt willi na Majorce rozpoczął się od określenia potrzeb
              inwestora, który oczekiwał nowoczesnej, jasnej przestrzeni z
              widokiem na morze, minimalistycznej formy oraz zastosowania
              naturalnych materiałów typowych dla śródziemnomorskiego klimatu.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] pb-[40px] lg:w-[48%]">
            <div className="flex gap-[10px] lg:gap-[15px] items-center">
              <span className="text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px]  lg:min-w-[45px] lg:flex lg:justify-end">
                (04)
              </span>
              <span className="font-medium-font-weight text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px]">
                Założenia projektu:
              </span>
            </div>
            <p className="ml-0 lg:ml-[60px] pb-[20px] border-b border-[rgba(0,0,0,0.48)] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
              Projekt willi na Majorce rozpoczął się od określenia potrzeb
              inwestora, który oczekiwał nowoczesnej, jasnej przestrzeni z
              widokiem na morze, minimalistycznej formy oraz zastosowania
              naturalnych materiałów typowych dla śródziemnomorskiego klimatu.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] pb-[40px] lg:w-[48%]">
            <div className="flex gap-[10px] lg:gap-[15px] items-center">
              <span className=" text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px]  lg:min-w-[45px] lg:flex lg:justify-end">
                (05)
              </span>
              <span className="font-medium-font-weight text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px]">
                Założenia projektu:
              </span>
            </div>
            <p className="ml-0 lg:ml-[60px] pb-[20px] border-b border-[rgba(0,0,0,0.48)] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
              Projekt willi na Majorce rozpoczął się od określenia potrzeb
              inwestora, który oczekiwał nowoczesnej, jasnej przestrzeni z
              widokiem na morze, minimalistycznej formy oraz zastosowania
              naturalnych materiałów typowych dla śródziemnomorskiego klimatu.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] pb-[40px] lg:w-[48%]">
            <div className="flex gap-[10px] lg:gap-[15px] items-center">
              <span className=" text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px] lg:min-w-[45px] lg:flex lg:justify-end">
                (06)
              </span>
              <span className="font-medium-font-weight text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px]">
                Założenia projektu:
              </span>
            </div>
            <p className="ml-0 lg:ml-[60px] pb-[20px] border-b border-[rgba(0,0,0,0.48)] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
              Projekt willi na Majorce rozpoczął się od określenia potrzeb
              inwestora, który oczekiwał nowoczesnej, jasnej przestrzeni z
              widokiem na morze, minimalistycznej formy oraz zastosowania
              naturalnych materiałów typowych dla śródziemnomorskiego klimatu.
            </p>
          </div>
        </div>
      </div>

      <div className="px-[20px] md:px-[40px] 2xl:px-[70px]">
        <button
          className="font-medium-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] after:w-full flex items-center ml-auto cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide details" : "View details"}
          <Image
            src={arrow}
            alt="Arrow Icon"
            className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative "
          />
        </button>
      </div>
    </div>
  );
}
