import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PowerOfCommunity from "@/components/PowerOfCommunity";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <PowerOfCommunity/>
      <Pricing/>
      <Footer/>
    </>
  );
}
