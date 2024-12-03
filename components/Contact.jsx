import Link from "next/link";
import { Button } from "./ui/button";
import { TypewriterEffectSmooth } from "./ui/TypeWriter";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";

export const socialMedia = [
  {
    id: 1,
    name: "Facebook",
    src: "https://www.facebook.com/nthnlpnglnn",
    img: "/fb.svg",
  },
  {
    id: 2,
    name: "Email",
    src: "mailto:nathanielpangilinan017@gmail.com",
    img: "/mailLogo.svg",
  },
  {
    id: 3,
    name: "Behance",
    src: "https://www.behance.net/nathanipangili",
    img: "/behance.svg",
  },
];

const Contact = () => {
  const words = [
    {
      text: "Design",
    },
    {
      text: "website",
    },
    {
      text: "UI/UX",
    },
    {
      text: "with",
    },
    {
      text: "Figma.",
      className:
        "bg-gradient-to-r from-[#eb34c0] via-[#b407f2] to-[#51026e] text-transparent bg-clip-text",
    },
  ];
  return (
    <div id="contact" className="py-20 relative">
      <div className="w-full absolute left-0 md:-bottom-72 min-h-96">
        <Image
          src="/dooot.svg"
          alt="grid"
          className="w-full h-full opacity-10 "
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col items-center justify-center h-[20rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <a href="mailto:nathanielpangilinan017@gmail.com" className="z-50 ">
            <Button variant="ghost" className="text-white border rounded-full">
              Contact me <FaArrowDown />
            </Button>
          </a>
        </div>
      </div>
      <div className="flex mt-8 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          Copyright © 2024 Nathaniel Pangilinan
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((smedia) => (
            <div
              key={smedia.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-full border border-black-300 mt-4"
            >
              <Link href={smedia.src} target="_blank">
                <Image
                  src={smedia.img}
                  alt={smedia.name}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
