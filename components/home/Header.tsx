"use client";
import React from "react";
import Image from "next/image";
import { H1 } from "@/components/global/headers";
export function Header() {
  return (
    <header className="w-full min-h-screen flex items-center flex-col z-[31] relative overflow-hidden pt-8 ">
      <div className="container mx-auto px-3 md:px-12 flex flex-col items-center relative max-sm:min-h-screen max-sm:justify-center">
        <div className="w-full flex justify-start max-sm:absolute max-sm:top-6 max-sm:left-6">
          <p className="text-white text-left">
            Portfolio—
            <strong className="font-helveticaMedium">Oussama Bouhouch</strong>
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 max-sm:flex-col-reverse ">
          <div className="flex flex-col sm:gap-2 items-start ">
            <H1 className="font-extrabold text-left font-helveticaMedium">
              I Don’t Just Design— I Create Brands That People Remember
            </H1>
            <p className="text-[#858585] md:text-lg md:max-w-lg mr-auto ">
              These convey confidence, personality, and flair. Want me to punch
              it up more?
            </p>
          </div>
          <div className="w-full p-2 flex flex-col justify-center items-center z-0">
            <Image
              src="/assets/images/bundle.webp"
              width={1000}
              height={1000}
              alt="social media desings"
              className="w-[300px] sm:w-[440px] floating-pic"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
