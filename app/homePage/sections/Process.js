import LazyComponent from "@/app/components/lazyComponent";
import Image from "next/image";
import ArrowWhite from "../../../public/arrow-right-white.png";
import ProcessImage from "../../../public/projekt3-large.webp";

import dataProjects from "../../dataProjects";

const projects = dataProjects();

export default function Process() {
  return (
    <section className="mx-margin-mobile flex flex-col lg:flex-row lg:justify-between">
      <div className="mb-[40px] lg:mb-0">
        <h3 className="text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(05)'] after:absolute after:top-[5px] after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:font-normal">
          Our Process
        </h3>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full font-light-font-weight mb-[50px]">
          During construction, we remain involved to make sure the project is
          executed according to the design. We visit the site,
        </p>
        <button className="font-medium-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] ml-auto mr-0 block after:w-full">
          Więcej o nas
        </button>
        <div className="mt-[40px]">
          <div className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)]  border-t-[1px] border-t-[rgba(0,0,0,0.2)]">
            <span className="block text-[clamp(18px,5.5vw,30px)] leading-[clamp(0.75rem,10vw,1.5rem)]">
              (01) Sketch Design
            </span>
          </div>
          <div className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)]">
            <span className="block text-[clamp(18px,5.5vw,30px)] leading-[clamp(0.75rem,10vw,1.5rem)]">
              (02) Design Development
            </span>
          </div>
          <div className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)]">
            <span className="block text-[clamp(18px,5.5vw,30px)] leading-[clamp(0.75rem,10vw,1.5rem)]">
              (03) Development Application
            </span>
          </div>
          <div className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)]">
            <span className="block text-[clamp(18px,5.5vw,30px)] leading-[clamp(0.75rem,10vw,1.5rem)]">
              (04) Interior Design
            </span>
          </div>
          <div className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)]">
            <span className="block text-[clamp(18px,5.5vw,30px)] leading-[clamp(0.75rem,10vw,1.5rem)]">
              (05) Building approval plans
            </span>
          </div>
        </div>
      </div>

      <div
        className="relative aspect-8/7 mb-[40px]  lg:w-[40%] lg:h-[450px]"
        style={{ backgroundImage: `url(${projects[1].bgImage})` }}
      >
        <LazyComponent height={500}>
          <Image
            src={projects[1].imgSrc}
            alt={projects[1].alt}
            fill
            unoptimized
            className="w-full h-auto object-cover"
          />
        </LazyComponent>
      </div>
    </section>
  );
}
