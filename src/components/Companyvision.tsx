import React from "react";

const Companyvision = () => {
  return (
    <section className="grid grid-cols-1 gap-6 md:gap-0 p-4 md:grid-cols-2 md:p-6 lg:w-[1000px] m-auto lg:-translate-y-16 lg:pb-0">
      <div className="relative overflow-hidden shadow-lg bg-persianGreen">
        <div className="p-6 flex flex-col items-start gap-4 h-full">
          <div className="bg-primary-foreground rounded-md p-3 flex items-center justify-center">
            <TargetIcon className="w-6 h-6 text-persianGreen" />
          </div>
          <h3 className="text-xl font-bold text-primary-foreground">
            Our Vision
          </h3>
          <p className="text-primary-foreground">
            To be the most efficient Projects Management, Engineering and Survey
            consultancy firm with quick and timely service delivery emphasizing
            accuracy and quality control with a sense of responsibility to the
            communities around us.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden shadow-lg bg-cultured">
        <div className="absolute inset-0 bg-carrotOrange/10 z-5"></div>
        <div className="p-6 flex flex-col items-start gap-4 h-full z-10">
          <div className="bg-carrotOrange rounded-md p-3 flex items-center justify-center">
            <CompassIcon className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-xl font-bold text-secondary-foreground">
            Our Mission
          </h3>
          <p className="text-secondary-foreground">
            To design, build and deliver best value services at the highest
            standards of workmanship, safety, ethics, and honesty in all
            professional work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Companyvision;

function CompassIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function TargetIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
