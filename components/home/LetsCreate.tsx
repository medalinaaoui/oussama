"use client";
import React from "react";
import Image from "next/image";
import { H2 } from "@/components/global/headers";
import Link from "next/link";
export function LetsCreate() {
  return (
    <section className="w-full flex items-center flex-col z-[31] relative overflow-hidden py-12 sm:py-16">
      <div className="container mx-auto px-6 md:px-8 flex flex-col items-center relative ">
        <div className="flex justify-center items-center gap-4 max-sm:flex-col-reverse ">
          <div className="flex flex-col gap-3 sm:gap-2 items-center sm:items-start sm:w-[40%] ">
            <H2 className="font-extrabold text-center sm:text-left font-helveticaMedium">
              Let’s Create Something Exceptional
            </H2>
            <p className="text-[#858585] md:text-lg md:max-w-xl mr-auto text-center sm:text-left">
              {`Whether you're looking to elevate your brand, create stunning
              visuals, or design seamless user experiences, I’m here to bring
              your vision to life. Let’s work together to create something bold,
              memorable, and impactful.`}
            </p>
            <p className="text-white md:text-lg md:max-w-xl mr-auto text-center mt-3 font-helveticaMedium">
              Let’s Talk!
            </p>
            <ul className="flex flex-col w-full">
              <li className="text-white md:text-lg md:max-w-xl">
                <Link href="mailto:oussamabouhouch2004@gmail.com">— Email</Link>
              </li>
              <li className="text-white md:text-lg md:max-w-xl">
                <Link href="https://www.linkedin.com/in/oussama-bouhouch-7089902a5/">
                  — LinkedIn
                </Link>
              </li>
              <li className="text-white md:text-lg md:max-w-xl">
                <Link href="tel:+212620733347">— Phone</Link>
              </li>
            </ul>
          </div>
          <div className="p-2 flex flex-col justify-center items-center z-0 max-sm:-my-6">
            <Image
              src="https://v0.funnelslayer.com/wp-content/uploads/2025/01/group-10.webp"
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
