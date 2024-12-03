"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-20",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardImage>
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={200}
                height={100}
                className="object-cover mx-auto w-full h-full rounded-lg"
              />
            </CardImage>
          </Card>
        </Link>
      ))}
    </div>
  );
};
export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl h-[27rem] w-full p-4 overflow-hidden bg-black border dark:border-white/[0.2] group-hover:border-slate-700",
        className
      )}
    >
      <div className="flex flex-col h-full relative z-50">
        <div className="p-4 flex-1">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardImage = ({ className, children }) => {
  return (
    <div
      className={cn(
        "absolute top-64 left-4 right-4 border h-32 rounded-lg ",
        className
      )}
    >
      {children}
    </div>
  );
};
