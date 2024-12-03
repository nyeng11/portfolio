import Image from "next/image";
import React from "react";

const tools = [
  {
    id: 1,
    name: "HTML5",
    src: "/html5.svg",
  },
  {
    id: 2,
    name: "CSS",
    src: "/csslogo.svg",
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    src: "/jslogo.svg",
  },
  {
    id: 4,
    name: "FIGMA",
    src: "/figmalogo.svg",
  },
  {
    id: 5,
    name: "PYTHON",
    src: "/pythonlgoo.svg",
  },
  {
    id: 6,
    name: "JAVA",
    src: "/javalogo.svg",
  },
];

const Tools = () => {
  return (
    <div className="text-white">
      <h1 className="text-white font-bold text-4xl md:text-5xl text-center md:text-start pb-10">
        Tools
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 border-t justify-items-center py-20 max-w-7xl mx-auto">
        {tools.map((tool) => (
          <div key={tool.id}>
            <Image
              src={tool.src}
              alt={tool.name}
              width={70}
              height={70}
              items={[tool]}
            />
            <p className="text-sm text-center py-4">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
