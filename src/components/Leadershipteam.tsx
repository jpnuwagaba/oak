import React from "react";

const Leadershipteam = () => {
  return (
    <section className="w-full py-8 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="archivo-black text-persianGreen text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Leadership Team
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our experienced and dedicated leadership team is committed to
              delivering exceptional results for our clients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-32 w-32 overflow-hidden rounded-full">
              <img
                src="/assets/asaph.webp"
                alt="John Doe"
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Asaph Opio</h3>
              <p className="text-muted-foreground">CEO</p>
              <p className="text-sm text-muted-foreground">
                John has over 20 years of experience in the construction
                industry, leading teams to deliver complex projects on time and
                within budget.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-32 w-32 overflow-hidden rounded-full">
              <img
                src="/assets/asaph.webp"
                alt="Jane Smith"
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-muted-foreground">COO</p>
              <p className="text-sm text-muted-foreground">
                Jane has a strong background in operations and project
                management, ensuring our projects run smoothly and efficiently.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-32 w-32 overflow-hidden rounded-full">
              <img
                src="/assets/asaph.webp"
                alt="Michael Johnson"
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Michael Johnson</h3>
              <p className="text-muted-foreground">CTO</p>
              <p className="text-sm text-muted-foreground">
                Michael has a deep understanding of construction technology and
                leads our innovation efforts, ensuring we stay at the forefront
                of the industry.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-32 w-32 overflow-hidden rounded-full">
              <img
                src="/assets/asaph.webp"
                alt="Sarah Lee"
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Sarah Lee</h3>
              <p className="text-muted-foreground">CFO</p>
              <p className="text-sm text-muted-foreground">
                Sarah has extensive experience in financial management and
                strategic planning, ensuring the financial stability and growth
                of our company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadershipteam;
