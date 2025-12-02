export default function FifthSection() {
  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-desktop lg:mx-small-laptop 2xl:mx-desktop mb-[80px] xl:mb-[110px]">
      <span className="block mb-[10px] md:mb-[20px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight">
        Awards Overview
      </span>
      <div className="flex flex-col ">
        <div className="flex justify-between border-t border-[rgba(0,0,0,0.4)] py-[20px] md:py-[40px]">
          <h3 className="text-[clamp(12px,3.75vw,36px)] leading-[clamp(0.75rem,10vw,1.5rem)] ">
            Local Architecture Award
          </h3>
          <div className="flex gap-[20px] md:gap-[40px] xl:gap-[80px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight">
            <span>Barcelona</span>
            <span>2025</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between border-t border-[rgba(0,0,0,0.4)] py-[20px] md:py-[40px]">
          <h3 className="text-[clamp(12px,3.75vw,36px)] leading-[clamp(0.75rem,10vw,1.5rem)] ">
            Prix Versailles
          </h3>
          <div className="flex gap-[20px] md:gap-[40px] xl:gap-[80px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight">
            <span>Milano</span>
            <span>2023</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between border-t border-[rgba(0,0,0,0.4)] py-[20px] md:py-[40px]">
          <h3 className="text-[clamp(12px,3.75vw,36px)] leading-[clamp(0.75rem,10vw,1.5rem)] ">
            Global Award for Sustainable Architecture
          </h3>
          <div className="flex gap-[20px] md:gap-[40px] xl:gap-[80px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight">
            <span>Madrid</span>
            <span>2022</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between border-t border-[rgba(0,0,0,0.4)] py-[20px] md:py-[40px]">
          <h3 className="text-[clamp(12px,3.75vw,36px)] leading-[clamp(0.75rem,10vw,1.5rem)] ">
            Prix Versailles
          </h3>
          <div className="flex gap-[20px] md:gap-[40px] xl:gap-[80px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight">
            <span>Roma</span>
            <span>2020</span>
          </div>
        </div>
      </div>
    </section>
  );
}
