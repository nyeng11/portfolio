import Image from "next/image";
import Photo from "./Photo";
import { Button } from "./ui/button";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="md:pt-40 pt-10 md:pb-36 pb-24 relative">
      <div className="w-full absolute left-0 md:-bottom-72 min-h-96">
        <Image
          src="/dooot.svg"
          alt="grid"
          className="w-full h-full opacity-10 "
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col justify-center md:flex-row gap-10 items-center relative my-10 order-2 md:order-none">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col text-center md:text-left ">
          <h1 className="text-[40px] text-white md:text-5xl lg:text-6xl font-bold">
          Bringing Your Vision to Life through Design
          </h1>
          <p>......</p>
          <p className="text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-w-2xl">
            Hi, I&apos;m Nathaniel Pangilinan, a passionate Computer Engineering
            student with a love for crafting intuitive and visually stunning
            UI/UX designs. Let&apos;s bring creativity and functionality together to
            create user experiences that truly stand out!
          </p>
          <a href="/nathResume.pdf" download="Nyeng_CV.pdf" className="mt-16">
            <Button
              variant="ghost"
              className="text-white border px-20 rounded-3xl py-6"
            >
              Download CV
              <FaArrowDown />
            </Button>
          </a>
        </div>
        <div className="order-1 md:order-none mb-8 md:mb-0 ">
          <Photo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
