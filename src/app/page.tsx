import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Projectshowcase from "@/components/Projectshowcase";
import Servicesgrid from "@/components/Servicesgrid";
import Whychooseus from "@/components/Whychooseus";
import Image from "next/image";
import Companyvision from "@/components/Companyvision";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Companyvision />
      <Intro />
      <Services />
      <Projectshowcase />
      <Whychooseus />
    </>
  );
}
