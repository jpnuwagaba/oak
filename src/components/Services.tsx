import React from "react";
import Servicesgrid from "./Servicesgrid";

const Services = () => {
  return (
    <div className="w-full pt-8 md:pt-16 bg-cultured">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-davysGrey sm:text-4xl md:text-5xl archivo-black">
          Our Services
        </h2>
        <p className="mx-auto max-w-[700px] text-davysGrey md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          As a leading consulting firm, we offer a wide range of services to
          help our clients achieve their goals. From strategic planning to
          operational optimization, we have the expertise and experience to
          deliver exceptional results.
        </p>
      </div>
      <Servicesgrid />
    </div>
    </div>
  );
};

export default Services;
