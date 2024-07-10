import React from "react";
import Link from "next/link";

const BriefcaseIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="#F2972F" />
    <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" stroke="#16A69B" />
  </svg>
);

const EngineeringIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 1v22M5 5h14M5 19h14" stroke="#F2972F" />
    <path d="M9 9h6v6H9z" stroke="#16A69B" />
  </svg>
);

const GisIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l5 5-5 5-5-5 5-5z" stroke="#F2972F" />
    <path d="M12 12l5 5-5 5-5-5 5-5z" stroke="#16A69B" />
  </svg>
);

const SurveyingIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12h20M12 2v20" stroke="#F2972F" />
    <path d="M4 4l16 16M4 20L20 4" stroke="#16A69B" />
  </svg>
);

const ValuationIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" stroke="#F2972F" />
    <path d="M2 12h20" stroke="#16A69B" />
    <path d="M12 2v20" stroke="#16A69B" />
  </svg>
);

const services = [
  {
    title: "Project Management",
    description: "We help our clients create a comprehensive plan for success, taking into account their unique needs and goals.",
    icon: BriefcaseIcon,
    color: "carrotOrange",
  },
  {
    title: "Engineering",
    description: "Our engineering services encompass civil, electrical, and mechanical engineering, providing innovative solutions tailored to your project’s specifications.",
    icon: EngineeringIcon,
    color: "carrotOrange",
  },
  {
    title: "GIS and Mapping",
    description: "We offer advanced GIS and mapping services to help you visualize, analyze, and interpret spatial data for better decision-making.",
    icon: GisIcon,
    color: "carrotOrange",
  },
  {
    title: "Land Surveying",
    description: "Our land surveying services ensure precise measurements and assessments, supporting the planning and development of your projects.",
    icon: SurveyingIcon,
    color: "carrotOrange",
  },
  {
    title: "Valuation Surveying",
    description: "We provide accurate valuation surveying services to determine the value of properties and assets, aiding in informed financial decisions.",
    icon: ValuationIcon,
    color: "carrotOrange",
  },
];

const Servicesgrid = () => {
  return (
    <section className="w-full py-8 md:py-16 bg-cultured">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link href="#" key={index}>
                <div className="rounded-lg border border-davysGrey bg-white p-6 shadow-sm transition-all hover:shadow-lg h-full">
                  <div className={`mb-4 flex items-center justify-left rounded-full bg-${service.color}/20`}>
                    <IconComponent className="w-8 h-8 text-davysGrey" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-davysGrey">{service.title}</h3>
                  <p className="text-davysGrey">{service.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicesgrid;
