import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineProject,
} from "react-icons/ai";

const Header = () => {
  return (
    <div className="py-6 flex justify-center items-center gap-20 md:gap-10 border-b sticky top-0 bg-black z-[100]">
      <Link
        href={"/"}
        className="relative text-white group tracking-widest flex flex-col items-center"
      >
        <span className="block md:hidden">
          <AiOutlineHome size={24} />
        </span>
        <span className="hidden md:block">H o m e</span>
        <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
      </Link>

      <Link
        href={"#contact"}
        className="relative text-white group tracking-widest flex flex-col items-center"
      >
        <span className="block md:hidden">
          <AiOutlineContacts size={24} />
        </span>
        <span className="hidden md:block">C o n t a c t</span>
        <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
      </Link>

      <Link
        href={"#projects"}
        className="relative text-white group tracking-widest flex flex-col items-center"
      >
        <span className="block md:hidden">
          <AiOutlineProject size={24} />
        </span>
        <span className="hidden md:block">P r o j e c t s</span>
        <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
      </Link>
    </div>
  );
};

export default Header;
