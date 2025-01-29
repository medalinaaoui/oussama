import Image from "next/image";
import { H3 } from "../global/headers";
import Link from "next/link";

const ClickToView = () => {
  const projects = [
    {
      id: 1,
      image:
        "https://v0.funnelslayer.com/wp-content/uploads/2025/01/home-page-3-1.webp",
      link: "https://go.duocircle.net/eli",
    },
    {
      id: 2,
      image:
        "https://v0.funnelslayer.com/wp-content/uploads/2025/01/home-page-1-2.webp",
      link: "https://go.duocircle.net/krista",
    },
    {
      id: 3,
      image:
        "https://v0.funnelslayer.com/wp-content/uploads/2025/01/home-page-4-1.webp",
      link: "https://ramo.agency/",
    },
    {
      id: 4,
      image:
        "https://v0.funnelslayer.com/wp-content/uploads/2025/01/home-page-5-1.webp",
      link: "https://elfen7.com/",
    },
    {
      id: 5,
      image:
        "https://v0.funnelslayer.com/wp-content/uploads/2025/01/home-page-6-1.webp",
      link: "https://go.duocircle.net/request-book",
    },
    {
      id: 6,
      image:
        "https://v0.funnelslayer.com/wp-content/uploads/2025/01/home-page-7-1.webp",
      link: "https://go.duocircle.net/launch-tomorrow",
    },
    {
      id: 7,
      image:
        "https://v0.funnelslayer.com/wp-content/uploads/2025/01/home-page-8-1.webp",
      link: "https://v0.funnelslayer.com/",
    },
    {
      id: 8,
      image:
        "https://v0.funnelslayer.com/wp-content/uploads/2025/01/home-page-9-1.webp",
      link: "https://funnelslayer.com/funnelmastery",
    },
  ];

  return (
    <section className="relative overflow-hidden w-full h-full flex justify-center items-center py-12 sm:py-16 px-6 bg-black p-a-s z-0">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex w-fit justify-start items-center gap-3 main-headline relative">
            <H3 className="text-white font-helveticaMedium ">
              Click to view each website separately
            </H3>
            <Image
              src="https://v0.funnelslayer.com/wp-content/uploads/2025/01/9dfeca29a6297b855fddce98be518aac.webp"
              width={200}
              height={200}
              alt="social media desings"
              className="w-8 h-8 rotate-3"
              style={{
                transform: "rotate(-40deg)",
              }}
            />
          </div>
          <div className="w-[90%] mx-auto grid sm:grid-cols-8 grid-cols-4 relative my-16 gap-y-24 sm:my-28">
            {projects.map((project) => {
              return (
                <Link
                  key={project.id}
                  href={project.link}
                  className="hover:-translate-y-12 transition-all duration-300"
                  target="_blank"
                >
                  <Image
                    src={project.image}
                    width={1000}
                    height={1000}
                    alt="social media desings"
                    className="w-full scale-150"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg"></div>
    </section>
  );
};
export default ClickToView;
