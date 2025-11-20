import Image from "next/image";
import arrow from "../../public/arrow.png";
import projekt1 from "../../public/projekt3-large.webp";
import projekt2 from "../../public/projekt2-large.webp";
import projekt3 from "../../public/projekt4-large.webp";
import projekt4 from "../../public/projekt1-large.webp";
import PortfolioClient from "../portfolio/PortfolioClient";

export default function Project() {
  return (
    <section className="flex flex-col pb-[150px]">
      <div className="flex  w-full justify-between pt-[200px] mb-[120px] px-[70px]">
        <h1 className="text-[clamp(1.6rem,7.5vw,2.5rem)] leading-[clamp(2.1rem,7.5vw,2.5rem)] font-medium mb-[30px] max-w-[500px] lg:text-[clamp(2rem,4.5vw,80px)] lg:leading-[clamp(2rem,4.5vw,80px)] lg:max-w-[700px] lg:w-[50%] 2xl:max-w-[850px] xl:font-normal  uppercase">
          Apartament Jarosławiec
        </h1>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight lg:w-[50%] max-w-[700px] ">
          We design contemporary villas in Mallorca, combining aesthetics with
          functionality. Our goal is to ensure that every project responds both
          to the island’s climate and the expectations of our clients.
        </p>
      </div>
      <div className="flex w-full justify-between mb-[80px] px-[70px]">
        <div>
          <span className="font-medium-font-weight text-[clamp(12px,3.35vw,20px)] leading-[clamp(0.75rem,10vw,20px)]">
            Australia
          </span>
        </div>
        <div className="flex flex-col text-[clamp(12px,3.35vw,20px)] leading-[clamp(0.75rem,10vw,20px)] gap-[16px]">
          <span className="font-medium-font-weight">Data completed</span>
          <span className="font-light-font-weight">2025</span>
        </div>
        <div className="flex flex-col text-[clamp(12px,3.35vw,20px)] leading-[clamp(0.75rem,10vw,20px)] gap-[16px]">
          <span className="font-medium-font-weight">Project Type</span>
          <span className="font-light-font-weight">New Build</span>
        </div>
        <div className="flex flex-col text-[clamp(12px,3.35vw,20px)] leading-[clamp(0.75rem,10vw,20px)] gap-[16px]">
          <span className="font-medium-font-weight">Collaborators</span>
          <span className="font-light-font-weight">Measured Up Builders</span>
          <span className="font-light-font-weight">ENG Consulting</span>
        </div>
      </div>
      <div className="px-[70px]">
        <button className="font-medium-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] after:w-full flex items-center ml-auto">
          View details{" "}
          <Image
            src={arrow}
            alt="Arrow Icon"
            className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative "
          />
        </button>
      </div>
      <div className="px-[30px] mt-[64px]">
        <div className="mt-[16px]">
          <div className="relative w-full aspect-[3/1.7] ">
            <Image
              src={projekt1}
              alt="pokój"
              fill
              className="object-cover"
              placeholder="blur"
            />
          </div>
          <div className="flex justify-between gap-[16px] mt-[16px]">
            <div className="relative w-full aspect-[6/4] ">
              <Image
                src={projekt3}
                alt="pokój"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="relative w-full aspect-[8/10]">
              <Image
                src={projekt2}
                alt="pokój"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div className="mt-[16px]">
          <div className="relative w-full aspect-[3/1.7] ">
            <Image
              src={projekt1}
              alt="pokój"
              fill
              className="object-cover"
              placeholder="blur"
            />
          </div>
          <div className="flex justify-between gap-[16px] mt-[16px]">
            <div className="relative w-full aspect-[6/4] ">
              <Image
                src={projekt3}
                alt="pokój"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="relative w-full aspect-[8/10]">
              <Image
                src={projekt2}
                alt="pokój"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div className="mt-[16px]">
          <div className="relative w-full aspect-[3/1.7] ">
            <Image
              src={projekt1}
              alt="pokój"
              fill
              className="object-cover"
              placeholder="blur"
            />
          </div>
          <div className="flex justify-between gap-[16px] mt-[16px]">
            <div className="relative w-full aspect-[6/4] ">
              <Image
                src={projekt3}
                alt="pokój"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="relative w-full aspect-[8/10]">
              <Image
                src={projekt2}
                alt="pokój"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
      <PortfolioClient />
    </section>
  );
}
