import Image from "next/image";
import ArrowWhite from "../../../public/arrow-right-white.png";

export default function Blog() {
  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet  lg:mx-small-laptop mb-[80px]  xl:mb-[150px]">
      <div className="md:flex md:flex-col md:justify-between w-full  md:mb-[40px]">
        <div className="flex flex-col">
          <h3 className="mb-5 text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(03)'] after:absolute after:top-[5px] after:text-[8px] xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px]  2xl:text-[80px] 2xl:font-normal xl:mb-[40px] 2xl:mb-[50px]">
            Blog
          </h3>
          <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full font-light-font-weight mb-[50px] xl:mb-[0] min-[380px]:max-w-[360px] md:max-w-[500px]">
            Welcome to our blog, where we explore design ideas, materials and
            architectural insights inspired by Mallorca.
          </p>
        </div>
        <button className="bg-main-black mb-[40px] rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-main-white ml-auto mr-0 font-medium flex items-center md:ml-0 text-[clamp(0.75rem,3.35vw,1rem)] md:flex md:max-h-[50px] self-end">
          Zobacz wszystkie
          <Image
            src={ArrowWhite}
            alt="strzałka"
            className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative "
          />
        </button>
      </div>
      <div className=" lg:hidden">
        <div className="flex w-full overflow-x-scroll snap-x snap-mandatory space-x-4  scrollbar-hide">
          <div className="flex-shrink-0 w-[80%] aspect-[3/4]   flex flex-col md:aspect-[7/6]">
            <div className="h-full relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/projekt3-small.webp)` }}
              >
                <Image
                  src="/projekt3-small.webp"
                  alt="pokoj"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>
          <div className="flex-shrink-0 w-[80%] aspect-[3/4]  flex flex-col md:aspect-[7/6]">
            <div className="h-full relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/projekt4-small.webp)` }}
              >
                <Image
                  src="/projekt4-small.webp"
                  alt="pokoj"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>
          <div className="flex-shrink-0 w-[80%] aspect-[3/4]   flex flex-col md:aspect-[7/6]">
            <div className="h-full relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/about-small.webp)` }}
              >
                <Image
                  src="/about-small.webp"
                  alt="pokoj"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-between">
        <div className="w-[39%] inline-block">
          <div className="lg:aspect-[8/7] relative xl:aspect-[8/6] 2xl:aspect-[4/3]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/projekt3-small.webp)` }}
            >
              <Image
                src="/projekt3-small.webp"
                alt="pokoj"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[65%]">
              Designing a Luxury Mediterranean Villa
            </span>
            <span className="opacity-[50%]">March 2025</span>
          </div>
        </div>

        <div className="w-[28%] inline-block">
          <div className="lg:aspect-[8/5] relative 2xl:aspect-[9/6]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/projekt2-small.webp)` }}
            >
              <Image
                src="/projekt2-small.webp"
                alt="pokoj"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[65%]">
              Maximizing Light and Views in Your Mallorca Home
            </span>
            <span className="opacity-[50%]">January 2025</span>
          </div>
        </div>

        <div className="w-[20%] inline-block xl:w-[22%] 2xl:w-[22%]">
          <div className="lg:aspect-[6/8] xl:aspect-[6/7] relative 2xl:aspect-[7/8] ">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/projekt4-small.webp)` }}
            >
              <Image
                src="/projekt4-small.webp"
                alt="pokoj"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[85%]">
              Materials and Finishes Inspired by Mallorca
            </span>
            <span className="opacity-[50%]">August 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
