"use client";
import React from "react";
import Image from "next/image";
import { H2 } from "@/components/global/headers";
export function CraftingSeamless() {
  return (
    <section className="w-full flex items-center flex-col z-[31] relative overflow-hidden pt-8 ">
      <div className="container mx-auto px-3 md:px-8 flex flex-col items-center relative ">
        <div className="flex justify-center items-center gap-4 max-sm:flex-col-reverse ">
          <div className="flex flex-col gap-3 sm:gap-2 items-center sm:items-start ">
            <H2 className="font-extrabold text-center sm:text-left font-helveticaMedium">
              Crafting Seamless Experiences
            </H2>
            <p className="text-[#858585] md:text-lg md:max-w-xl mr-auto text-center sm:text-left">
              Good design isn’t just about aesthetics—it’s about how it works.
              My approach to UI/UX design focuses on creating intuitive,
              user-friendly experiences that drive engagement and conversions.
              From wireframes to high-fidelity prototypes, I design interfaces
              that not only look stunning but also deliver results. So here are
              some of my biggest projects 👇
            </p>
          </div>
          <div className="p-2 flex flex-col justify-center items-center z-0 max-sm:-my-6">
            <Image
              src="https://v0.funnelslayer.com/wp-content/uploads/2025/01/group-8.webp"
              width={1000}
              height={1000}
              alt="social media desings"
              className="w-[350px] sm:w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
