import Image from "next/image";
import Link from "next/link";

export default function Button({
  linkTo = "#",
  arrow,
  bgColor,
  textColor,
  additionalStyles = "",
  children,
}) {
  return (
    <Link
      href={linkTo}
      className={` cursor-pointer flex justify-center items-center bg-${bgColor} rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-${textColor} font-medium md:ml-0 text-[clamp(0.75rem,3.35vw,1rem)] self-end ${additionalStyles}`}
    >
      {children}
      <Image
        src={arrow}
        alt="Arrow Icon"
        className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative "
      />
    </Link>
  );
}
