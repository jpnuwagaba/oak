import React from "react";

const Ourstory = () => {
  return (
    <section className="w-full py-8 lg:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 lg:max-w-4xl">
          <div className="space-y-3">
            <h2 className="archivo-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-persianGreen">
              Our Story
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              OAK Professions has been a trusted name in the engineering,
              construction, and surveying industries for over 50 years.
              Founded in 1970, we&apos;ve grown to become one of the leading
              providers of comprehensive solutions, delivering high-quality
              projects and exceptional service to our clients.
            </p>
          </div>
          <div className="after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 relative pl-6 after:left-0 grid gap-10">
            <div className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-persianGreen rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium text-lg">1970 - Company Founded</div>
              <div className="text-muted-foreground">
                OAK Professions was established in 1970 by a team of
                experienced professionals with a vision to deliver exceptional
                quality and service in the engineering, construction, and
                surveying sectors.
              </div>
            </div>
            <div className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-persianGreen rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium text-lg">
                1985 - Expansion to New Markets
              </div>
              <div className="text-muted-foreground">
                OAK Professions expanded its operations to new markets,
                securing major projects in the commercial and industrial
                sectors.
              </div>
            </div>
            <div className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-persianGreen rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium text-lg">
                1995 - Awarded Industry Accolades
              </div>
              <div className="text-muted-foreground">
                OAK Professions&apos; commitment to excellence was recognized when
                the company received several industry awards for its
                outstanding project management and safety practices.
              </div>
            </div>
            <div className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-persianGreen rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium text-lg">
                2010 - Sustainable Construction Initiatives
              </div>
              <div className="text-muted-foreground">
                OAK Professions launched its sustainable construction
                initiatives, incorporating eco-friendly practices and
                technologies into its projects to reduce environmental impact.
              </div>
            </div>
            <div className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-persianGreen rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium text-lg">
                2020 - Expansion to New Regions
              </div>
              <div className="text-muted-foreground">
                OAK Professions expanded its geographical reach, opening new
                offices and securing projects in neighboring regions,
                solidifying its position as a leading provider of engineering,
                construction, and surveying solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourstory;
