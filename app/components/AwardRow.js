import FadeInMobile from "./FadeInMobile";

export default function AwardRow({ title, city, year }) {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between border-t border-[rgba(0,0,0,0.4)] py-[20px] md:py-[40px] items-center">
        <FadeInMobile>
          <h3 className="text-[clamp(12px,3.75vw,30px)] leading-[clamp(0.75rem,5.5vw,2.2rem)] font-medium-font-weight md:font-normal-font-weight md:pl-[10px] pr-[20px] md:pr-[50px] max-w-[600px] 2xl:max-w-[800px]">
            {title}
          </h3>
        </FadeInMobile>
        <div className="flex gap-[20px] md:gap-[40px] xl:gap-[80px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight md:pr-[10px] min-w-[140px] justify-between md:min-w-[210px]">
          <FadeInMobile>
            <span>{city}</span>
          </FadeInMobile>
          <FadeInMobile>
            <span>{year}</span>
          </FadeInMobile>
        </div>
      </div>
    </div>
  );
}
