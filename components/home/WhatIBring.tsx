import { H2 } from "@/components/global/headers";

import Image from "next/image";
const WhatIBring = () => {
  return (
    <section className="relative overflow-hidden w-full h-full flex justify-center items-center py-8 px-6 bg-black p-a-s z-0">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col gap-5 items-center">
          <div className="w-full p-2 flex flex-col justify-center gap-3">
            <H2 className="text-center text-white md:max-w-3xl mx-auto font-helveticaMedium">
              What I Bring to the Table
            </H2>
          </div>
          <div className="w-fit flex justify-center relative what-i-bring-image py-16">
            <Image
              src="https://v0.funnelslayer.com/wp-content/uploads/2025/01/9-1.webp"
              width={1000}
              height={1000}
              alt="social media desings"
              className="sm:w-[300px] w-[220px]"
            />
            <div className="absolute top-2 -left-[20%] sm:-left-[30%] animate-float w-fit">
              <Image
                src="https://v0.funnelslayer.com/wp-content/uploads/2025/01/cf3e2f839f57236edf90d22d41952d29.webp"
                width={100}
                height={100}
                alt="social media desings"
                className="w-10 sm:w-14  -rotate-12"
              />
            </div>
            <div className=" absolute top-[43%] -left-[27%] sm:-left-[37%] animate-float w-fit ">
              <Image
                src="https://v0.funnelslayer.com/wp-content/uploads/2025/01/551775a9a32dcb3271e99f4a382e5603.webp"
                width={100}
                height={100}
                alt="social media desings"
                className="w-10 sm:w-14 rotate-12"
              />
            </div>
            <div className="absolute bottom-0 -left-[20%] sm:-left-[32%] animate-float w-fit ">
              <Image
                src="https://v0.funnelslayer.com/wp-content/uploads/2025/01/14aa563d8f94e8876975917c878a576a.webp"
                width={100}
                height={100}
                alt="social media desings"
                className="w-10 sm:w-14 -rotate-12"
              />
            </div>
            {/* RIGHT */}
            <div className="absolute top-2 -right-[20%] sm:-right-[30%] animate-float w-fit">
              <Image
                src="https://v0.funnelslayer.com/wp-content/uploads/2025/01/f86d351fe26ce17fa81060879272569f.webp"
                width={100}
                height={100}
                alt="social media desings"
                className="w-10 sm:w-14  -rotate-12"
              />
            </div>
            <div className=" absolute top-[43%] -right-[27%] sm:-right-[37%] animate-float w-fit ">
              <Image
                src="https://v0.funnelslayer.com/wp-content/uploads/2025/01/236941e5495ac2962b956492ff14dccc.webp"
                width={100}
                height={100}
                alt="social media desings"
                className="w-10 sm:w-14 rotate-12"
              />
            </div>
            <div className="absolute bottom-0 -right-[20%] sm:-right-[32%] animate-float w-fit ">
              <Image
                src="https://v0.funnelslayer.com/wp-content/uploads/2025/01/ab21961635aa05655d39f11c2559e029.webp"
                width={100}
                height={100}
                alt="social media desings"
                className="w-10 sm:w-14 -rotate-12"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-[#858585] md:text-lg text-center md:max-w-2xl mx-auto">
              {`Design is my superpower, and I use it to help businesses grow.
              From crafting scroll-stopping social media visuals to building
              conversion-driven sales pages, I deliver designs that don’t just
              look good—they work hard. Wherever I go, I leave a touch that
              becomes the brand's concrete foundation—a style and standard that
              other designers follow long after I’ve moved on. With 5 years of
              experience and numerous achievements, I’ve collaborated with
              brands globally to elevate their image and results.`}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg"></div>
    </section>
  );
};
export default WhatIBring;
