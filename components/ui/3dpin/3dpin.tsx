"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import Image from "next/image";

const pinData = [
  {
    title: "Hllc-2024",
    href: "https://hllc.mfu.ac.th/",
    description: "How to live and learn Activities ",
    image: "/images/logo-sdad.png"
  },
  {
    title: "Kale Ai",
    href: "https://github.com/jemiezler/Kale-SeniorProject",
    description: "Create AI to check the quality from the image",
    image: "/images/nextjs.jpg"
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    description: "A utility-first CSS framework.",
    image: "/images/tailwind.jpg"
  }
];

export function ThreeDPin() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      {pinData.map((item, index) => (
        <PinContainer
          key={index}
          title={item.title}
          href={item.href}
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              {item.title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                {item.description}
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}
