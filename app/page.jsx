import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Header />
        <Hero />
        <Projects />
        <Tools />
        <Contact />
      </div>
    </div>
  );
}
