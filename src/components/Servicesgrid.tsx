import React from "react";
import { HandPlatter } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Project Management",
    description:
      "We help our clients create a comprehensive plan for success, taking into account their unique needs and goals.",
    icon: "briefcaseIcon",
    color: "carrotOrange",
  },
  {
    title: "Engineering",
    description:
      "Our engineering services encompass civil, electrical, and mechanical engineering, providing innovative solutions tailored to your project’s specifications.",
    icon: "",
    color: "carrotOrange",
  },
  {
    title: "GIS and Mapping",
    description:
      "We offer advanced GIS and mapping services to help you visualize, analyze, and interpret spatial data for better decision-making.",
    icon: "",
    color: "carrotOrange",
  },
  {
    title: "Land Surveying",
    description:
      "Our land surveying services ensure precise measurements and assessments, supporting the planning and development of your projects.",
    icon: "",
    color: "carrotOrange",
  },
  {
    title: "Valuation Surveying",
    description:
      "We provide accurate valuation surveying services to determine the value of properties and assets, aiding in informed financial decisions.",
    icon: "",
    color: "carrotOrange",
  },
];

const Servicesgrid = () => {
  return (
    <section className="w-full py-8 md:py-16 bg-cultured">
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link href="#" key={index}>
              <div
                className="rounded-lg border border-davysGrey bg-white p-6 shadow-sm transition-all hover:shadow-lg h-full"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-${service.color}/20`}
                >
                  {/* <HandPlatter color={service.color === "carrotOrange" ? "#F2972F" : "#16A69B"} /> */}
                  <img className="w-8" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwNTk2YzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oYXJkLWhhdCI+PHBhdGggZD0iTTIgMThhMSAxIDAgMCAwIDEgMWgxOGExIDEgMCAwIDAgMS0xdi0yYTEgMSAwIDAgMC0xLTFIM2ExIDEgMCAwIDAtMSAxdjJ6Ii8+PHBhdGggZD0iTTEwIDEwVjVhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2NSIvPjxwYXRoIGQ9Ik00IDE1di0zYTYgNiAwIDAgMSA2LTYiLz48cGF0aCBkPSJNMTQgNmE2IDYgMCAwIDEgNiA2djMiLz48L3N2Zz4=" alt="" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-davysGrey">{service.title}</h3>
                <p className="text-davysGrey">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicesgrid;
