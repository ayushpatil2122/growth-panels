import Analytics from "@/components/home/Analytics";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import PowerOfCommunity from "@/components/home/PowerOfCommunity";
import Pricing from "@/components/home/Pricing";

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
