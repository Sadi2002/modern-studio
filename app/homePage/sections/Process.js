import LazyComponent from "@/app/components/lazyComponent";
import Image from "next/image";
import ArrowWhite from "../../../public/arrow-right-white.png";

import dataProjects from "../../dataProjects";

const projects = dataProjects();

export default function Process() {
  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet lg:flex-row lg:justify-between lg:mx-small-laptop">
      <div className="mb-[40px] lg:mb-0 lg:w-[50%]">
        <h3 className="text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(05)'] after:absolute after:top-[5px] after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:font-normal">
          Our Process
        </h3>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full font-light-font-weight mb-[50px] min-[380px]:max-w-[360px] md:max-w-[550px]">
          During construction, we remain involved to make sure the project is
          executed according to the design. We visit the site,
        </p>
        <button className="font-medium-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] ml-auto mr-0 block after:w-full lg:hidden">
          Więcej o nas
        </button>
        <button className="bg-main-black rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-main-white ml-auto mr-0 font-medium flex items-center md:ml-0 text-[clamp(0.75rem,3.35vw,1rem)] hidden lg:flex lg:ml-auto">
          Cytaj więcej
          <LazyComponent height={500}>
            <Image
              src={ArrowWhite}
              alt="strzałka"
              className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative"
            />
          </LazyComponent>
        </button>
        <div className="mt-[40px]">
          <div className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)]  border-t-[1px] border-t-[rgba(0,0,0,0.2)]">
            <span className="block text-[clamp(18px,5.5vw,25px)] leading-[clamp(0.75rem,10vw,2rem)]">
              (01) Sketch Design
            </span>
          </div>
          <div className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)]">
            <span className="block text-[clamp(18px,5.5vw,25px)] leading-[clamp(0.75rem,10vw,2rem)]">
              (02) Design Development
            </span>
          </div>
          <div className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)]">
            <span className="block text-[clamp(18px,5.5vw,25px)] leading-[clamp(0.75rem,10vw,2rem)]">
              (03) Development Application
            </span>
          </div>
          <div className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)]">
            <span className="block text-[clamp(18px,5.5vw,25px)] leading-[clamp(0.75rem,10vw,2rem)]">
              (04) Interior Design
            </span>
          </div>
          <div className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)]">
            <span className="block text-[clamp(18px,5.5vw,25px)] leading-[clamp(0.75rem,10vw,2rem)]">
              (05) Building approval plans
            </span>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%]">
        <div
          className="relative aspect-8/7 mb-[40px] lg:w-[100%] lg:h-[300px] lg:top-[87.5px] xl:top-[100px] lg:mb-0"
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
          <p className="mt-[10px] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(16px,4.5vw,1.5rem)] max-w-[360px] lg:mt-[20px] lg:text-[16px] lg:leading-[24px]">
            {" "}
            Przestrzeń powinna oddychać światłem i funkcją. Projektując,
            poszukuję relacji między naturą a strukturą. Perspektywą
          </p>
        </div>
      </div>
    </section>
  );
}
