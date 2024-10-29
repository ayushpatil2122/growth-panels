import { CatalyzeGrowth } from "@/components/CatalyzeGrowth";
import { Hero } from "@/components/Hero";
import { MarketingArmy } from "@/components/MarketingArmy";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <MarketingArmy/>
      <CatalyzeGrowth/>
    </>
  );
}
