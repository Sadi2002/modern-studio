"use client";
import Image from "next/image";
import { useState } from "react";

export default function BlogFilter({ searchPlaceholder, onSearchChange }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const v = e.target.value;
    setValue(v);
    onSearchChange(v);
  };

  return (
    <div className="w-full lg:w-[25%] flex flex-col mb-[40px] lg:mb-0">
      <div className="relative border-b border-[rgb(0,0,0)] pb-[10px]">
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={value}
          onChange={handleChange}
          className="w-[90%] focus:outline-none pl-[15px]"
        />
        <Image
          width={24}
          height={24}
          src="/lupka.png"
          alt="Lupka"
          className="object-cover absolute top-[40%] right-[15px] translate-y-[-50%]"
        />
      </div>

      <div className="font-medium-font-weight flex flex-col gap-[15px] mt-[40px]">
        <span>Mieszkanie</span>
        <span>Domy jednorodzinne</span>
        <span>Kawiarnie</span>
        <span>Wieżowiec</span>
      </div>
    </div>
  );
}
