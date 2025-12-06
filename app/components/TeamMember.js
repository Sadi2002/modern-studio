import Image from "next/image";

export default function TeamMember({ image, name, role, wrapperClass = "" }) {
  return (
    <div
      className={`flex flex-col lg:w-[23%] xl:w-[23%] gap-[10px] md:w-[75%] ${wrapperClass}`}
    >
      <div className="relative flex flex-col aspect-[7/8] xl:aspect-[9/10] 2xl:aspect-[15/16]">
        <Image src={image} alt={name} className="object-cover h-full" fill />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col pr-[15px]">
          <h3 className="text-[clamp(16px,4.5vw,20px)] leading-[clamp(0.75rem,10vw,1.5rem)]">
            {name}
          </h3>
          <span className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight">
            {role}
          </span>
        </div>
        <div className="flex gap-[10px]">
          <div className="w-[20px] h-[20px]">
            <Image
              src="/instagram.png"
              alt="instagram"
              className="object-cover h-full"
              width={20}
              height={20}
            />
          </div>
          <div className="w-[20px] h-[20px]">
            <Image
              src="/linkedIn.png"
              alt="linkedin"
              className="object-cover h-full"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
