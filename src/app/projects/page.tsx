import React from "react";
import Hero2 from "@/components/Hero2";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Hero2
        title="Our Projects"
        subtitle="Discover the best products and services for your needs."
      />
      <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-8 lg:py-16">
        <Link
          href={""}
          className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          <img
            src="/assets/hero-img.jpg"
            alt="Project 1"
            width={400}
            height={300}
            className="object-cover w-full h-64"
          />
          <div className="p-4 bg-white">
            <h3 className="text-xl font-bold text-davysGrey">Project 1</h3>
            <p className="text-sm text-davysGrey">
              A brief description of the project.
            </p>
          </div>
        </Link>
        <Link
          href={""}
          className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          <img
            src="/assets/hero-img.jpg"
            alt="Project 2"
            width={400}
            height={300}
            className="object-cover w-full h-64"
          />
          <div className="p-4 bg-white">
            <h3 className="text-xl font-bold text-davysGrey">Project 2</h3>
            <p className="text-sm text-davysGrey">
              A brief description of the project.
            </p>
          </div>
        </Link>
        <Link
          href={""}
          className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          <img
            src="/assets/hero-img.jpg"
            alt="Project 3"
            width={400}
            height={300}
            className="object-cover w-full h-64"
          />
          <div className="p-4 bg-white">
            <h3 className="text-xl font-bold text-davysGrey">Project 3</h3>
            <p className="text-sm text-davysGrey">
              A brief description of the project.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default page;
