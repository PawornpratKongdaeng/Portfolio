"use client";
import React from "react";
import { SparklesCore } from "./sparkles";
import { ContainerTextFlipDemo } from "../containertext/containertext";

export function SparklesPreview() {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Hello, I'm Nawin
      </h1>
      <div className="w-full flex items-center justify-center mt-24">
      <ContainerTextFlipDemo />
      </div>
    </div>
  );
}
