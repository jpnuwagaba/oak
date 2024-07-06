import Companyvisionsection from "@/components/Companyvisionsection";
import Hero2 from "@/components/Hero2";
import React from "react";
import Corevalues from "@/components/Corevalues";
import Ourstory from "@/components/Ourstory";
import Leadershipteam from "@/components/Leadershipteam";

const page = () => {
  return (
    <>
      <Hero2
        title="About OAK"
        subtitle="Discover the best products and services for your needs."
      />
      <Companyvisionsection />
      <Corevalues />
      <Ourstory />
      <Leadershipteam />
    </>
  );
};

export default page;
