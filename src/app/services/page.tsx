import React from "react";
import Hero2 from "@/components/Hero2";
import Servicesgrid from "@/components/Servicesgrid";

const page = () => {
  return (
    <>
      <Hero2
        title="Our Services"
        subtitle="As a leading consulting firm, we offer a wide range of services to help our clients achieve their goals. From strategic planning to operational optimization, we have the expertise and experience to deliver exceptional results."
      />
      <Servicesgrid />
    </>
  );
};

export default page;
