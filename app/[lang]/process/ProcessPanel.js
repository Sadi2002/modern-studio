import Image from "next/image";

export default function ProcessPanel({ index, title, description, image }) {
  console.log(index);
  return (
    <div
      id={index === 1 ? "more" : ""}
      className="panel-process w-[100vw] lg:w-[50vw] pb-[40px] mb-[40px] lg:mb-[0] border-b border-[rgba(0,0,0,0.2)] lg:pb-0 px-[20px] md:px-[40px] lg:border-b-0 h-full flex items-center lg:pt-[120px] 2xl:pt-[150px] text-black lg:border-r lg:border-[rgba(0,0,0,0.2)] flex-col lg:px-[40px] xl:px-[80px] 2xl:px-[150px] items-start"
    >
      <div className="max-w-[100%]">
        <span className="text-[16px] md:text-[20px] block mb-[10px] font-normal-font-weight">
          ({String(index).padStart(2, "0")})
        </span>
        <h3 className="text-[clamp(23px,3vw,64px)] max-w-[350px] md:text-[45px] md:max-w-[525px] leading-[clamp(30px,3vw,64px)] md:leading-[45px] mb-[20px] lg:text-[clamp(30px,3vw,64px)] lg:leading-[clamp(36px,3vw,64px)] font-medium-font-weight lg:font-normal-font-weight 2xl:max-w-[100%]">
          {title}
        </h3>
        <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[40px] flex flex-col gap-[16px] md:max-w-[85%] lg:max-w-[100%]">
          {description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="relative aspect-[6/4] md:aspect-[5/3] max-w-[100%] md:max-w-[80%] w-[100%] lg:aspect-[7/4]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}
