import ClickToView from "@/components/home/ClickToView";
import { CraftingSeamless } from "@/components/home/CraftingSeamless";
import { Header } from "@/components/home/Header";
import { LetsCreate } from "@/components/home/LetsCreate";
import MyWorkSpeaks from "@/components/home/MyWorkSpeaks";
import WhatIBring from "@/components/home/WhatIBring";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <WhatIBring />
        <MyWorkSpeaks />
        <CraftingSeamless />
        <ClickToView />
        <LetsCreate />
      </main>
    </>
  );
}
