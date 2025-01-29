"use client";
import React, { useState } from "react";
import Image from "next/image";
import PicsModal from "@/components/home/PicsModal";

const Projects = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  return (
    <div className="grid h-full w-full place-items-center relative">
      <div className="mt-16 flex flex-col items-center gap-4">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {cardData?.map((card) => (
            <Image
              key={card.id}
              src={card.url}
              width={400}
              height={400}
              alt="social media designs"
              className="w-28 sm:w-24 rounded-sm sm:rounded-xl sm:border-2 border-[1px] border-white cursor-pointer"
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>

        {/* Preview text and image */}
        <div className="flex justify-center items-center gap-3">
          <p className="text-[#bfa5a4] font-medium text-center md:max-w-2xl mx-auto">
            *Click to preview
          </p>
          <Image
            src="https://v0.funnelslayer.com/wp-content/uploads/2025/01/9dfeca29a6297b855fddce98be518aac.webp"
            width={200}
            height={200}
            alt="social media designs"
            className="w-4 h-4"
            style={{ transform: "rotate(-10deg)" }}
          />
        </div>
      </div>

      {/* Single modal instance */}
      <PicsModal
        projectName={selectedCard?.name || ""}
        Pics={selectedCard?.pics || []}
        open={!!selectedCard}
        setOpen={() => setSelectedCard(null)}
      />
    </div>
  );
};

export default Projects;

type Card = {
  id: number;
  url: string;
  name: string;
  pics: string[];
};

const cardData: Card[] = [
  {
    id: 1,
    url: "https://v0.funnelslayer.com/wp-content/uploads/2025/01/23-12-24_02-1.webp",
    name: "FunnelSlayer",
    pics: [
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/23-12-24_01.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/23-12-24_02-1.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/23-12-24_03.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/28-12-24_01.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/28-12-24_02-1.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/28-12-24_03.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/11-1-25_01.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/11-1-25_02.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/11-1-25_03.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/88d8bb033ece2f8a844a97903064be6e.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/ff01081de4cdb7bb757e90c44d86193d.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/a1d51d915b588742e007d6bc7dd7bfbe.webp",
    ],
  },
  {
    id: 2,
    url: "https://v0.funnelslayer.com/wp-content/uploads/2025/01/a0b067b51c8bface4fd0e374d11834df.webp",
    name: "The Se7enth Art",
    pics: [
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/074f8a7a64b2c7c073bdaeeefcb88caa.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/72cf2b11cd9f24f2f63154459cf1689e.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/31b6a2127100aa8fd62c98a612fff324.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/3aa8aa7d7dd357319ae4ccbcb59e021a.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/c84a3fd64e548e60abe2a61c657f0c35.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/d69.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/eb8c7cd64eeec94510b0359227d39400.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/f5a4544f8c73b2a7a0f3756c8a7f311a.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/7d96d3cb62c093374ef3dedcaefc03a9.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/00cb28d4165072238f29617c9b580657.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/77cd6dc2540d7e90c94c056f0ba57547.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/438c0dcfd7461c69fe96482ae6c1f11e.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/6148c611574ca3cf9401127348b67ea1.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/a0b067b51c8bface4fd0e374d11834df-1.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/a7f942b0f3c7b0364367fa0ba0abe927.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/acae5b4587ff75fb743b245a25f4ec91.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/bac7155a0ce04860607d4e75fad701b2.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/f16cf8001264b4d557a642dd2cb5d95f.webp",
    ],
  },
  {
    id: 3,
    url: "https://v0.funnelslayer.com/wp-content/uploads/2025/01/fef958b335ec1787724f76e060c03f47.webp",
    name: "Echecs Ensate",
    pics: [
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/9a71e59b130b7431d4a677e4b785f3c4.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/88ba668f9547b80dc6ec8346ad8bf4d5.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/866145c927195773b3f4960e6c657af0.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/fa81ef46b6d3a3cf57f10ec6a68c1c3d.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/fef958b335ec1787724f76e060c03f47-2.webp",
    ],
  },
  {
    id: 4,
    url: "https://v0.funnelslayer.com/wp-content/uploads/2025/01/05b7cb628de7d49ada8da864088cc9ad.webp",
    name: "Educati",
    pics: [
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/a197a61db2591ccc0de47e2acb007bdc.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/c9ad8af286cdb975a485a70ea01ac377.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/c3934a8d2fb38187d7a13a7b0d0e6ab1.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/ccb37fa3a40a3faa79ca9fecd2c8bdd1.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/f90cdfbfef5088aa940df73bce3aa602.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/fc5f109170967c52485c8e28b13eecf7.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/1c988a2c6dcaafc048006c8d1631f082.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/2c05f3cc29b532f3770736f94876d118.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/2f6104579acc2f4f53c0f51d014ca900.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/7f03c292281fcf0421b6c2f246d68f48.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/12d0485cfda729545f489d8f64735bbf.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/13cc2e6e88f536ec210c8a6c958e6547.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/23d23027742451dfdbda10d4de651a70.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/37be8c43fbca672e8d1bd136944a9e9c.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/538da56f21a0c20ba83584af97690022.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/60854aaef8a1ea408e2dc8cbdf469161.webp",
    ],
  },

  {
    id: 5,
    url: "https://v0.funnelslayer.com/wp-content/uploads/2025/01/27a7102779cc82a39ff22dcfb0d0ce17.webp",
    name: "Avids",
    pics: [
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/5f9547430980cd54130c907d2104f737.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/6dd0738ce6bacb73daf72682ce618c6a.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/11f22badb0bb7a74e18aa6860808a71d.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/27a7102779cc82a39ff22dcfb0d0ce17-1.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/37df3d8ef0335c2b87bdf003218b8d18.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/94afea488d7c67093727eb453367e665.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/0361dcffff714d935326ee57380473ab.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/97941e08018d0e2f043ba7daa97fceee.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/a37bf1f69f0fc55ff0b17fc6e9a62954.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/a665df1c5c9debc28dbe2d2017293129.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/bcce011720d547bd5420c28aa2cd59b9.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/bdbb3d8f267e968c6eaf3a4318e68925.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/f05cb8884efbcd2ffe04c2e8c4c043d7.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/f3148bfaf4bae1195327dea855e4b357.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/2fc8baaa593c1e06c5d2f3687b27f8d1.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/4c14fe7e99f479dc1a3ace6ab488a30d.webp",
    ],
  },
  {
    id: 6,
    url: "https://v0.funnelslayer.com/wp-content/uploads/2025/01/8f6b5820e67ae64e085778a37b020f47-1.webp",
    name: "Ramo Agency",
    pics: [
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/3c4723e61d2c68000dd696c8726569fa.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/5e248bf1d3a6de402f7a5994135220d6.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/8dc33526bbcb65d6cae13c151d3ceca9.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/8f6b5820e67ae64e085778a37b020f47.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/09d76ee4c388537894fbf7e11ede2fbe.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/39f0c91755f4bf46c4c0e1841746f2d9.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/62ed5a49fb1191cc47c000e74ebaff22.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/95763e7c3e9fb7ac21f9380adf6157da.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/221265c291092be0662e574d174e10ab.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/312992db0d93fc4c58a8c17b03c95538.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/f05836f97797d7faa8330140c4fc1eec.webp",
      "https://v0.funnelslayer.com/wp-content/uploads/2025/01/fc571b2bd3d1a19bc2d228d6fcb8e22b.webp",
    ],
  },
];
