import React, { FC } from "react";

interface Props {
  title: string;
  subtitle: string;
}

const Hero2: FC<Props> = ({ title, subtitle }) => {
  return (
    <header
      style={{
        backgroundImage: "url(/assets/hero-img.jpg)",
      }}
      className="w-full py-8 md:py-16 lg:py-24 bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="space-y-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold archivo-black tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export default Hero2;
