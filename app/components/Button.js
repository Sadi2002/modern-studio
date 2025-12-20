import Image from "next/image";
import Link from "next/link";

export default function Button({
  linkTo = "#",
  arrow,
  bgColor,
  textColor,
  additionalStyles = "",
  children,
  type,
}) {
  const classNames = `group cursor-pointer inline-flex gap-2 justify-center items-center leading-none bg-${bgColor} rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-${textColor} font-medium text-[clamp(0.75rem,3.35vw,1rem)] ${additionalStyles}`;

  const AnimatedText = (
    <span className="relative overflow-hidden h-[1em] leading-none block">
      {/* pierwszy (widoczny) */}
      <span className="block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full will-change-transform">
        {children}
      </span>

      {/* drugi (ukryty na dole) */}
      <span className="absolute left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full will-change-transform">
        {children}
      </span>
    </span>
  );

  const Content = (
    <>
      {AnimatedText}
      <Image
        src={arrow}
        alt="Arrow Icon"
        className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] relative top-[0.5px]"
      />
    </>
  );

  if (type === "submit") {
    return (
      <button type="submit" className={classNames}>
        {Content}
      </button>
    );
  }

  return (
    <Link href={linkTo} className={classNames}>
      {Content}
    </Link>
  );
}
