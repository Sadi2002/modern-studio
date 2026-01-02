import Image from "next/image";
import Link from "next/link";

export default function TeamMember({
  image,
  name,
  role,
  instagram,
  linkedin,
  wrapperClass = "",
}) {
  return (
    <div
      className={`flex flex-col lg:w-[23%] xl:w-[23%] gap-[5px] md:w-[75%] ${wrapperClass}`}
    >
      <div className="relative flex flex-col aspect-[7/8] xl:aspect-[9/10] 2xl:aspect-[15/16] overflow-hidden">
        <Link target="_blank" href={instagram}>
          <Image
            src={image}
            alt={name}
            className="object-cover transition-transform duration-500 ease-out hover:scale-105"
            fill
          />
        </Link>
      </div>
      <div className="flex justify-between lg:min-h-[72px]">
        <div className="flex flex-col pr-[15px]">
          <h3 className="text-[clamp(16px,4.5vw,20px)] leading-[clamp(0.75rem,10vw,1.5rem)] font-medium-font-weight">
            {name}
          </h3>
          <span className="text-[clamp(12px,3.35vw,14px)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light">
            {role}
          </span>
        </div>
        <div className="flex gap-[10px] pt-[2px]">
          {instagram && (
            <Link target="_blank" href={instagram}>
              <Image
                src="/instagram.png"
                alt={`Instagram of ${name}`}
                width={20}
                height={20}
                className="object-cover"
              />
            </Link>
          )}
          {linkedin && (
            <Link target="_blank" href={linkedin}>
              <Image
                src="/linkedIn.png"
                alt={`LinkedIn of ${name}`}
                width={20}
                height={20}
                className="object-cover"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
