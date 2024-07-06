import React from "react";
import Image from "next/image";

const Companyvisionsection = () => {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl text-davysGrey font-bold tracking-tighter archivo-black sm:text-4xl md:text-5xl">
              Our Mission and Vision
            </h2>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                To design, build and deliver best value services at the highest
                standards of workmanship, safety, ethics, and honesty in all
                professional work.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-muted-foreground text-lg">
                To be the most efficient Projects Management, Engineering and
                Survey consultancy firm with quick and timely service delivery
                emphasizing accuracy and quality control with a sense of
                responsibility to the communities around us.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">            
            <Image
              src="/assets/hero-img.jpg"
              width={550}
              height={550}
              alt="Mission and Vision"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companyvisionsection;
