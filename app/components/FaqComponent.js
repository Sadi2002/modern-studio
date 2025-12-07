"use client";

import { useState } from "react";
import Image from "next/image";

function FaqComponent({ data }) {
  // data = faqSection z Sanity
  // items = array of { item: { question, answer } }
  const items =
    data?.items
      ?.map((entry, index) => {
        const item = entry.item ?? entry;
        if (!item) return null;
        return {
          id: index + 1, // generujemy id, bo w schemacie go nie ma
          title: item.question,
          description: item.answer,
        };
      })
      .filter(Boolean) || [];

  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  if (!items.length) return null;

  return (
    <div className="border-t-[1px] border-t-[rgba(0,0,0,0.2)]  lg:w-[85%] xl:w-[70%] 2xl:w-[50%]">
      {items.map((step) => {
        const isOpen = openId === step.id;
        return (
          <div
            key={step.id}
            className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)] cursor-pointer transition-all "
            onClick={() => toggleFaq(step.id)}
          >
            <div className="flex justify-between items-center">
              <span className="block text-[clamp(16px,3.5vw,20px)] font-light-font-weight leading-[clamp(20px,6vw,2rem)] pr-[15px]">
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
                <p className="font-light opacity-[64%] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] pr-[30px] md:pr-[70px]">
                  {step.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FaqComponent;
