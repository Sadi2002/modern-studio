"use client";
import { useState } from "react";
import dataFaq from "../../data/dataFaq";
import Image from "next/image";

const faq = dataFaq();

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet  lg:mx-small-laptop mb-[80px] xl:mb-[150px]">
      <h3 className="mb-5 text-[clamp(36px,6.5vw,45px)] leading-[clamp(42px,6.5vw,45px)] font-medium uppercase relative after:content-['(5)'] after:absolute after:bottom-[15px] after:text-[8px] md:mb-[50px] xl:mb-[40px] 2xl:mb-[50px] xl:text-6xl xl:after:text-[14px] xl:after:bottom-[30px] 2xl:after:bottom-[35px]  2xl:text-[80px] 2xl:font-normal md:mb-0 ">
        Questions & Answers
      </h3>
      <div className="border-t-[1px] border-t-[rgba(0,0,0,0.2)]  lg:w-[85%] xl:w-[70%] 2xl:w-[50%]">
        {faq.map((step, index) => {
          const isOpen = openId === step.id;
          return (
            <div
              key={step.id}
              className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)] cursor-pointer transition-all "
              onClick={() => toggleFaq(step.id)}
            >
              <div className="flex justify-between items-center">
                <span className="block text-[clamp(14px,3.5vw,20px)] font-light-font-weight leading-[clamp(20px,6vw,2rem)] pr-[15px]">
                  {step.title}
                </span>
                <Image
                  width={20}
                  height={20}
                  src="/chev.png"
                  alt="Arrow Icon"
                  className="mr-[10px]"
                />
              </div>

              {isOpen && (
                <div className="mt-[20px]">
                  <p className="font-light opacity-[64%] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
