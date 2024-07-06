import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Companyvision from "./Companyvision";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/hero-img.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="container px-4 md:px-6 z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 archivo-black">
          Unleash Your Vision
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover unparalleled engineering, construction, and surveying
          solutions to elevate your projects to new heights.
        </p>
        <div className="flex flex-row gap-4">
          <Link href="#" prefetch={false}>
            <Button className="bg-carrotOrange text-white hover:bg-mellowApricot">
              Get Quotation
            </Button>
          </Link>
          <Link href="#" prefetch={false}>
            <Button className="bg-persianGreen text-white hover:bg-middleBlueGreen">
              Company Brochure
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
