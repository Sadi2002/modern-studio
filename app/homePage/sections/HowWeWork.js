import HowWeWorkCard from "@/app/components/HowWeWorkCard";
import Image from "next/image";

export default function HowWeWork() {
  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-small-laptop">
      <h3 className="text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(05)'] after:absolute after:top-[5px] after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px]">
        How we work
      </h3>
      <div className="flex flex-col gap-[50px]">
        <HowWeWorkCard cardNum="01" />
        <HowWeWorkCard cardNum="01" />
        <HowWeWorkCard cardNum="01" />
        <HowWeWorkCard cardNum="01" />
        <HowWeWorkCard cardNum="01" />
      </div>
    </section>
  );
}
