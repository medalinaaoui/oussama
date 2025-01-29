import { H2 } from "@/components/global/headers";

import Image from "next/image";
import Projects from "./Projects";
const MyWorkSpeaks = () => {
  return (
    <section className="relative overflow-hidden w-full h-full flex justify-center items-center py-12 sm:py-16 px-6 bg-black p-a-s z-40">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col gap-5 items-center">
          <div className="w-full p-2 flex flex-col justify-center gap-3">
            <H2 className="text-center text-white md:max-w-3xl mx-auto font-helveticaMedium">
              My Work Speaks for Itself
            </H2>
            <p className="text-[#858585] md:text-lg text-center md:max-w-2xl mx-auto mt-3">
              Here are some projects that left a mark.
            </p>
          </div>
          <div className="w-fit flex justify-center relative -my-3 -mb-8">
            <Image
              src="https://v0.funnelslayer.com/wp-content/uploads/2025/01/group-4.webp"
              width={1000}
              height={1000}
              alt="social media desings"
              className="w-[500px] sm:w-[680px]"
            />
          </div>
          <Projects />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg"></div>
    </section>
  );
};
export default MyWorkSpeaks;
