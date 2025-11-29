import Link from "next/link";
import ArrowWhite from "../../public/arrow-right-white.png";
import Button from "../components/Button";

export default function Contact() {
  return (
    <section className="flex justify-between ml-tablet">
      <div className="pt-[150px]">
        <h1 className="text-[clamp(1.6rem,7.5vw,2.5rem)] leading-[clamp(2.1rem,7.5vw,2.5rem)] max-w-[700px] font-normal-font-weight mb-[20px]">
          Let’s create something unforgettable
        </h1>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight max-w-[600px] mb-[80px]">
          For all inquiries, please contact our team. We are ready to discuss
          new projects, answer your questions, and explore how we can bring your
        </p>
        <form className="space-y-8 max-w-[90%]">
          <h2 className="text-[20px] font-medium-font-weight mb-[50px]">
            Send a message
          </h2>
          <div className="flex flex-col gap-8 md:flex-row md:gap-8">
            <div className="flex-1">
              <input
                id="name"
                type="text"
                className="w-full border-b border-black outline-none py-2 bg-transparent placeholder:text-[16px] placeholder:font-light"
                autoComplete="off"
                placeholder="Name"
              />
            </div>
            <div className="flex-1">
              <input
                id="email"
                type="email"
                className="w-full border-b border-black outline-none py-2 bg-transparent placeholder:text-[16px] placeholder:font-light"
                autoComplete="off"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <textarea
              id="message"
              rows={3}
              className="w-full border-b border-black outline-none py-2 bg-transparent resize-none placeholder:text-[16px] placeholder:font-light"
              placeholder="Message"
            />
          </div>
          <div className="flex justify-end">
            <Button
              arrow={ArrowWhite}
              linkTo="/portfolio"
              bgColor="main-black"
              textColor="main-white"
              additionalStyles="md:self-end"
            >
              Send message
            </Button>
          </div>
        </form>
      </div>
      <div className="bg-black flex h-[100dvh] w-[40%]">
        <div className="text-main-white flex flex-col ml-[80px] space-y-4 absolute bottom-[100px]">
          <span>
            E-mail:
            <Link href="mailto:kontakt@sadowskistudio.com">
              kontakt@sadowskistudio.com
            </Link>
          </span>
          <span>
            Phone:<Link href="mailto:+48414512859">+48 414 512 859</Link>
          </span>
          <span>
            <Link href="https://google.com">Facebook</Link>
          </span>
        </div>
      </div>
    </section>
  );
}
