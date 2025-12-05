import Image from "next/image";
import projekt2 from "../../public/projekt2-large.webp";
import projekt3 from "../../public/projekt3-large.webp";
import projekt4 from "../../public/projekt4-large.webp";

export default function Blog() {
  return (
    <section className="pt-[200px] mx-desktop">
      <div className="flex justify-between items-center lg:mb-[80px]">
        <div>
          <h1 className="text-[clamp(36px,8vw,45px)] leading-[clamp(36px,8vw,45px)] uppercase font-medium mb-[20px] max-w-[500px] xl:max-w-[700px] lg:text-[45px] lg:leading-[45px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] 2xl:max-w-[900px] 2xl:text-[80px] 2xl:leading-[80px]  2xl:font-normal">
            Projects, Process, and Our Ideas
          </h1>
          <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight max-w-[600px]  ">
            Dive into our world of architecture where every project tells a
            story. Discover the design processes, creative insights, and
            innovative ideas that shape our work and inspire our clients.
          </p>
        </div>
        <div className="w-[25%] flex flex-col">
          <div className="relative border-b border-[rgb(0,0,0)] pb-[10px]">
            <input
              type="text"
              placeholder="Wpisz nazwe kategorii"
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
            <span>Wieżowce</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex lg:justify-between mb-[80px]">
          <div className="w-[39%] inline-block">
            <div className="lg:aspect-[8/8] relative xl:aspect-[8/7]">
              <Image
                src={projekt4}
                alt="pokoj"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[65%]">
                Designing a Luxury Mediterranean Villa
              </span>
              <span className="text-[#757575] text-[14px]">March 2025</span>
            </div>
          </div>

          <div className="w-[30%] inline-block">
            <div className="lg:aspect-[8/5] relative ">
              <Image
                src={projekt3}
                alt="pokoj"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[70%]">
                Maximizing Light and Views in Your Mallorca Home
              </span>
              <span className="text-[#757575] text-[14px]">January 2025</span>
            </div>
          </div>

          <div className="w-[20%] inline-block xl:w-[20%] ">
            <div className="lg:aspect-[6/8] xl:aspect-[6/8] relative ] ">
              <Image
                src={projekt2}
                alt="pokoj"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[85%]">
                Materials and Finishes Inspired by Mallorca.
              </span>
              <span className="text-[#757575] text-[14px]">August 2024</span>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-between mb-[80px]">
          <div className="w-[27%] inline-block">
            <div className="lg:aspect-[8/8] relative xl:aspect-[11/9]">
              <Image
                src={projekt2}
                alt="pokoj"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[65%]">
                Designing a Luxury Mediterranean Villa
              </span>
              <span className="text-[#757575] text-[14px]">March 2025</span>
            </div>
          </div>
          <div className="w-[16%] inline-block">
            <div className="lg:aspect-[8/8] relative xl:aspect-[8/10]">
              <Image
                src={projekt4}
                alt="pokoj"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[65%]">
                Designing a Luxury Mediterranean Villa
              </span>
              <span className="text-[#757575] text-[14px]">March 2025</span>
            </div>
          </div>

          <div className="w-[23%] inline-block">
            <div className="lg:aspect-[8/5] relative ">
              <Image
                src={projekt2}
                alt="pokoj"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[70%]">
                Maximizing Light and Views in Your Mallorca Home
              </span>
              <span className="text-[#757575] text-[14px]">January 2025</span>
            </div>
          </div>

          <div className="w-[20%] inline-block xl:w-[18%] ">
            <div className="lg:aspect-[6/8] xl:aspect-[6/7] relative ">
              <Image
                src={projekt3}
                alt="pokoj"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[85%]">
                Materials and Finishes Inspired by Mallorca.
              </span>
              <span className="text-[#757575] text-[14px]">August 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
